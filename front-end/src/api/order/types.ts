interface IOrder {
  _id: string;
  items: any[];
  amount: string;
  address: any;
  status?: "processing" | "complete";
  date?: Date;
  paymentImage: string;
  payment?: boolean;
  firstName: string;
  lastName?: string;
  email?: string;
  zipCode: string;
}
