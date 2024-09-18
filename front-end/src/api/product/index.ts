import { requestToServer } from "request-handler";
import { IProduct } from "./types";
import { IResponse } from "api/shared_types";

export const GETProductList = async () => {
  const result = await requestToServer<IResponse<IProduct[]>>({
    method: "GET",
    url: `/v1/product`,
  });
  return result?.data;
};
