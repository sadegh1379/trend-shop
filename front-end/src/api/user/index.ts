import { requestToServer } from "request-handler";
import { IResponse } from "api/shared_types";
import { IUser, IUserCart } from "./types";

export const GETUserInfo = async () => {
  const result = await requestToServer<IResponse<IUser>>({
    method: "GET",
    url: `/v1/user`,
  });
  return result?.data;
};

export const GETUserCart = async () => {
  const result = await requestToServer<IResponse<IUserCart>>({
    method: "GET",
    url: `/v1/cart`,
  });
  return result?.data;
};

export const POSTUserCart = async (productId: string) => {
  const result = await requestToServer<IResponse<void>>({
    method: "POST",
    url: `/v1/cart`,
    data: { itemId: productId },
  });
  return result?.data;
};

export const DELETEUserCartItem = async (productId: string) => {
  const result = await requestToServer<IResponse<void>>({
    method: "DELETE",
    url: `/v1/cart/${productId}`,
  });
  return result?.data;
};
