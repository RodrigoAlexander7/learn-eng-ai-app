import { axiosClient } from "@/lib/axiosClient";

export const getChatResponse = async (message: string) => {
   const response = await axiosClient.post('chat/', { message });
   return response.data;
}