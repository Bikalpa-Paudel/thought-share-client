import api from "../apiConfig";

export const sendOtp = async (data: { email: string; }) => {
  const response = await api.post("/otp/send-otp", data);
  return response.data;
};