import { requestToServer } from "request-handler";
import { IProduct, IProductRequest } from "./types";
import { IResponse } from "api/shared_types";
import { queryBuilder } from "utils";

export const GETProductList = async (request: IProductRequest) => {
  const params = queryBuilder(request);
  const result = await requestToServer<IResponse<IProduct[]>>({
    method: "GET",
    url: `/v1/product?${params}`,
  });
  return result?.data;
};
