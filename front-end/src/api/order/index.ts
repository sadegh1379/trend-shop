import { requestToServer } from "request-handler";

export const POSTOrder = async (data: FormData) => {
  const result = await requestToServer<void>({
    method: "POST",
    url: `/v1/order`,
    data,
  });
  return result;
};

export const GETUserOrders = async () => {
  const result = await requestToServer<{ data: IOrder[] }>({
    method: "GET",
    url: `/v1/order`,
  });
  return result?.data;
};

export const GETUserOrderById = async (orderId: string) => {
  const result = await requestToServer<{ data: IOrder }>({
    method: "GET",
    url: `/v1/order/${orderId}`,
  });
  return result?.data;
};
