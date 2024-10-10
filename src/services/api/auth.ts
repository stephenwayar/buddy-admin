import { httpNoAuth } from "@/config/axios";
import { LoginData, RegistrationData } from "../types/auth.types";

export const login = async (payload: LoginData) => {
  const url = '/api/admin/login'
  const res = await httpNoAuth.post(url, payload);

  return res.data;
};

export const register = async (payload: RegistrationData) => {
  const url = '/api/admin/register'
  const res = await httpNoAuth.post(url, payload);

  return res.data;
};

export const verifyOTP = async (payload: { otp: string }) => {
  const url = '/api/admin/verify-otp'
  const res = await httpNoAuth.post(url, payload);

  return res.data;
};

export const resendOTP = async (payload: { email: string }) => {
  const url = '/api/admin/resend-otp'
  const res = await httpNoAuth.post(url, payload);

  return res.data;
};