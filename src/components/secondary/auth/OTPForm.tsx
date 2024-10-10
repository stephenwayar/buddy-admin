import React, { useState } from "react";
import { AxiosError } from "axios";
import { UseFormReturnType } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { Icon } from "@iconify/react/dist/iconify.js";
import { resendOTP, verifyOTP } from "@/services/api/auth";
import { InitialValuesType, Step } from "@/pages/auth/signup/with-email";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
  form: UseFormReturnType<InitialValuesType, (values: InitialValuesType) => InitialValuesType>
}

export default function OTPForm({ form, setStep }: Props) {
  const [timer, setTimer] = useState(0);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isDisabled, setIsDisabled] = useState(false);
  const [otpError, setOtpError] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: (data: { otp: string }) => verifyOTP(data),
    onError: (error: AxiosError) => {
      const errorData = error.response?.data as { message: string };

      setOtpError(errorData.message)
    },
    onSuccess: () => setStep(3)
  })

  const handleResend = async () => {
    setIsDisabled(true);
    setTimer(30);

    try {
      // Call the resendOTP function
      await resendOTP({ email: form.values.email });

      // Start the countdown if the resend succeeds
      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(countdown);
            setIsDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

    } catch (error) {
      console.log(error);

      // Reset timer and button state if resend fails
      setIsDisabled(false);
      setTimer(0);
    }
  };

  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return; // Ensure input is a number
    setOtpError(null) // Clear errors when user is typing

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // Automatically move to the next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }

    // Clear error when the user types
    if (otpError) setOtpError(null);
  };

  const handleBackspace = (value: string, index: number) => {
    // If the input is empty and it's not the first input field
    if (value === '' && index > 0) {
      // Get the previous input field using the index
      const prevInput = document.getElementById(`otp-${index - 1}`);

      // If the previous input exists, focus on it
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join('');

    if (otpValue.length < 4) {
      setOtpError('Please fill all fields');
      return;
    }

    setOtpError(null) 
    mutation.mutate({ otp: otpValue }) // Initiate transaction
  };

  return (
    <div className="rounded-[8px] space-y-5 bg-white border-[#DDE2E4] shadow-xl shadow-[#DDE2E4] border p-10">
      <div className="space-y-3">
        <h1 className="font-semibold text-[#1D1D18] text-2xl">
          Verify your email
        </h1>

        <h3 className="text-[#5B6871] text-sm">
          A four digit OTP code has been sent to your email <span className="font-semibold text-[#FF8600]">{form.values.email}</span>
        </h3>

        <div className="!mt-7">
          <div className="flex space-x-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                id={`otp-${index}`}
                disabled={mutation.isPending}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => e.key === 'Backspace' && handleBackspace(e.currentTarget.value, index)}
                className={`sm:w-14 sm:h-14 w-12 h-12 text-[#5B6871] text-center text-lg border-2 rounded-[10px] focus:outline-none focus:border-[#FF8600] ${otpError ? 'border-red-500 focus:border-red-500' : 'border-[#DDE2E4]'}`}
              />
            ))}
          </div>

          {otpError && (
            <label className="text-red-500 mt-2">
              {otpError}
            </label>
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={mutation.isPending}
          className='px-4 h-12 w-40 !mt-7 transition duration-75 delay-75 ease-linear space-x-2 font-semibold disabled:cursor-not-allowed disabled:bg-[#ECEDED] hover:bg-[#ff8800e1] bg-[#FF8600] disabled:text-[#C3C7CE] text-white rounded-[8px]'
        >
          {mutation.isPending ?
            <Icon
              width="20"
              height="20"
              color="#C3C7CE"
              icon="icomoon-free:spinner2"
              className={`animate-spin mx-auto`}
            /> :
            'Confirm code'
          }
        </button>

        <p className="text-[#84919A] !mt-10 text-sm">
          Didn’t get the mail? <button disabled={isDisabled} onClick={handleResend} className='text-[#FF8600] disabled:cursor-not-allowed'>Resend {isDisabled && `(${timer}s)`}</button>
        </p>
      </div>
    </div>
  )
}