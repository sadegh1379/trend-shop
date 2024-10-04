interface IUser {
  name: string;
  email: string;
  phone: string;
  password: string;
  isAdmin: boolean;
  cartData: {
    [key: string]: number;
  };
}

interface IUserCart {
  [key: string]: number;
}

export type { IUser, IUserCart };
