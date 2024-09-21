interface IUser {
  name: string;
  email: string;
  phone: string;
  password: string;
  cartData: {
    [key: string]: number;
  };
}

export type { IUser };
