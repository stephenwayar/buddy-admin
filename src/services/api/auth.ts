import { httpNoAuth } from "@/config/axios";
import { LoginData } from "../types/auth.types";

export const login = async (payload: LoginData) => {
  const url = '/api/auth/login'
  const res = await httpNoAuth.post(url, payload);

  return res.data;
};