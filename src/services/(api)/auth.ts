import api from "../apiConfig";

export const sendOtp = async (data: { email: string; password: string; username: string; }) => {
  const response = await api.post("/otp/send-otp", data);
  return response.data;
};

export const signup = async (data: { email: string; otp: string; password: string; username: string; }) => {
  const response = await api.post("/auth/signup", data);
  return response.data;
};