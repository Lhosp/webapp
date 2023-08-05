import axios, { AxiosResponse } from "axios";
import { useSelector } from "react-redux";

interface ApiResponse<T> {
  data: T;
}
type RequestType = "GET" | "POST" | "PUT" | "DELETE";
export const Client4 = async <T>(
  requestType: RequestType,
  endpoint: string,
  data?: any
): Promise<T> => {
  try {
    // const baseURL = process.env.BASE_URL;
    // const token = process.env.TOKEN;
    const baseURL = "http://127.0.0.1:8000/";
    const token =
      useSelector((state: any) => state.auth.token) ||
      localStorage.getItem("token");
    if (!baseURL || !token) {
      throw new Error(
        "Missing environment variables. Make sure BASE_URL and TOKEN are defined."
      );
    }

    const axiosInstance = axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let response: AxiosResponse;

    switch (requestType.toLowerCase()) {
      case "get":
        response = await axiosInstance.get<ApiResponse<T>>(endpoint);
        break;
      case "post":
        response = await axiosInstance.post<ApiResponse<T>>(endpoint, data);
        break;
      case "put":
        response = await axiosInstance.put<ApiResponse<T>>(endpoint, data);
        break;
      case "delete":
        response = await axiosInstance.delete<ApiResponse<T>>(endpoint);
        break;
      default:
        throw new Error(`Invalid request type: ${requestType}`);
    }
    console.log(response);
    // Process the response or return it as needed
    return response.data;
  } catch (error: any) {
    // Handle errors or rethrow them
    throw new Error(`Error making request to ${endpoint}: ${error.message}`);
  }
};
