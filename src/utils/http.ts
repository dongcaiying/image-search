import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { message } from "antd";

export interface IResponse {
  code: number | string;
  data: any;
  msg: string;
}

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "",
  responseType: "json",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
  validateStatus() {
    return true;
  },
});

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response.data;
    } else {
      message.error(response.statusText);
      return response;
    }
  },
  (error: any) => {
    const { response } = error;
    if (response) {
      return Promise.reject(response.data);
    } else {
      message.error("网络连接异常,请稍后再试!");
    }
  }
);
