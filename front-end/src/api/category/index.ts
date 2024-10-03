import { requestToServer } from "request-handler";
import { ICategory } from "./types";
import { IResponse } from "api/shared_types";

export const GETCategoriesList = async () => {
  const result = await requestToServer<IResponse<ICategory[]>>({
    method: "GET",
    url: `/v1/category`,
  });
  return result?.data;
};
