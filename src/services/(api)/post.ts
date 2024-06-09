import { post } from "@/global";
import api from "../apiConfig";

export const getPosts = async (): Promise<post[]> => {
  const { data } = await api.get("/api/posts");
  return  await data.posts;
};
