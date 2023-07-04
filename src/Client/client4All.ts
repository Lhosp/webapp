import axios, { AxiosResponse } from 'axios';




interface ApiResponse<T> {
  data: T;
}

export const client4All = async <T>( requestType: string, endpoint: string, data?: any): Promise<T> => {
  try {
    const baseURL = process.env.BASE_URL;
    const token = process.env.TOKEN;

    if (!baseURL || !token) {
      throw new Error('Missing environment variables. Make sure BASE_URL and TOKEN are defined.');
    }

    const axiosInstance = axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let response: AxiosResponse<ApiResponse<T>>;

    switch (requestType.toLowerCase()) {
      case 'get':
        response = await axiosInstance.get<ApiResponse<T>>(endpoint);
        break;
      case 'post':
        response = await axiosInstance.post<ApiResponse<T>>(endpoint, data);
        break;
      case 'put':
        response = await axiosInstance.put<ApiResponse<T>>(endpoint, data);
        break;
      case 'delete':
        response = await axiosInstance.delete<ApiResponse<T>>(endpoint);
        break;
      default:
        throw new Error(`Invalid request type: ${requestType}`);
    }

    // Process the response or return it as needed
    return response.data.data;
  } catch (error: any) {
    // Handle errors or rethrow them
    throw new Error(`Error making request to ${endpoint}: ${error.message}`);
  }
};
