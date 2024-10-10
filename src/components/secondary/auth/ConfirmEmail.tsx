import React, { useState } from "react";
import Image from "next/image";
import { resendOTP } from "@/services/api/auth";
import { UseFormReturnType } from "@mantine/form";
import emailIcon from '@/assets/svgs/sent-email 1.svg'
import { InitialValuesType, Step } from "@/pages/auth/signup/with-email";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
  form: UseFormReturnType<InitialValuesType, (values: InitialValuesType) => InitialValuesType>
}

export default function ConfirmEmail({ form, setStep }: Props) {
  const [timer, setTimer] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

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

  return (
    <div className="rounded-[8px] space-y-5 bg-white border-[#DDE2E4] shadow-xl shadow-[#DDE2E4] border py-20 px-6 flex items-center">
      <div className="w-full">
        <div className="mx-auto w-fit">
          <Image
            priority
            src={emailIcon}
            alt="email icon"
          />
        </div>

        <div className="space-y-4 text-center w-full max-w-[25rem] mx-auto">
          <h1 className="font-semibold text-[#1D1D18] text-2xl">
            Check your mailbox !
          </h1>

          <h3 className="text-[#5B6871] text-sm">
            We’ve sent an email to <span className="font-semibold">{form.values.email}</span> with a an OTP to confirm your account. Check your inbox to  activate your account.
          </h3>

          <button
            onClick={() => setStep(2)}
            className='px-4 h-12 w-40 !mt-6 transition duration-75 delay-75 ease-linear space-x-2 font-semibold disabled:cursor-not-allowed disabled:bg-[#ECEDED] hover:bg-[#ff8800e1] bg-[#FF8600] disabled:text-[#C3C7CE] text-white rounded-[8px]'
          >
            Confirm Email
          </button>

          <p className="text-[#84919A] !mt-10 text-sm">
            Didn’t get the mail? <button disabled={isDisabled} onClick={handleResend} className='text-[#FF8600] disabled:cursor-not-allowed'>Resend {isDisabled && `(${timer}s)`}</button>
          </p>
        </div>
      </div>
    </div>
  )
}