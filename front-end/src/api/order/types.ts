interface IOrder {
  items: any[];
  amount: string;
  address: any;
  status?: string;
  date?: Date;
  paymentImage: string;
  payment?: boolean;
}
