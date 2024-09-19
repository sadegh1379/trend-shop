import { requestToServer } from "request-handler";

export const POSTUserLogin = async ({
  phone,
  password,
}: {
  phone: string;
  password: string;
}) => {
  const result = await requestToServer<{ token: string }>({
    method: "POST",
    url: `/v1/user/login`,
    data: {
      phone,
      password,
    },
  });
  return result;
};

export const POSTUserRegister = async ({
  name,
  phone,
  password,
}: {
  phone: string;
  password: string;
  name: string;
}) => {
  const result = await requestToServer<{ token: string }>({
    method: "POST",
    url: `/v1/user/register`,
    data: {
      phone,
      password,
      name,
    },
  });
  return result;
};
