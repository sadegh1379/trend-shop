import { requestToServer } from "request-handler";

export const POSTOrder = async (data: FormData) => {
  const result = await requestToServer<void>({
    method: "POST",
    url: `/v1/order`,
    data,
  });
  return result;
};
