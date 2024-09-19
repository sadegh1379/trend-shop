interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface IProductRequest {
  categoryId?: string;
}

export type { IProduct, IProductRequest };
