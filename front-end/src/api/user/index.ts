import { requestToServer } from "request-handler";
import { IResponse } from "api/shared_types";
import { IUser } from "./types";

export const GETUserInfo = async () => {
  const result = await requestToServer<IResponse<IUser>>({
    method: "GET",
    url: `/v1/user`,
  });
  return result?.data;
};
