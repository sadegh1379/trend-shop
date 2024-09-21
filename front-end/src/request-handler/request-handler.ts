import axios, { AxiosInstance, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const serverInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API,
  timeout: 30000,
});

const addInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = JSON.parse(localStorage.getItem("token") as string);
      config.headers = config.headers || {};
      config.headers["token"] = `${token}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        const { status, data } = error.response;

        switch (status) {
          case 400:
            toast.error(data.message || "درخواست نامعتبر");
            break;
          case 401:
            toast.error(data.message || "دسترسی غیرمجاز");
            localStorage.removeItem("token");
            localStorage.removeItem("user-info");
            break;
          case 404:
            toast.error(data.message || "منبع یافت نشد");
            break;
          case 500:
            toast.error(data.message || "خطای سرور");
            break;
          default:
            toast.error(data.message || "یک خطای نامشخص رخ داده است");
            break;
        }
      } else {
        toast.error("خطا در ارتباط با سرور");
      }

      return Promise.reject(error);
    }
  );
};

addInterceptors(serverInstance);

const requestToServer = async <T>({
  method,
  data,
  url,
}: {
  method: "GET" | "POST" | "DELETE" | "PUT";
  url: string;
  data?: any;
}): Promise<T> => {
  const response: AxiosResponse<T> = await serverInstance.request({
    url,
    method,
    data,
  });
  return response.data;
};

export { requestToServer };
