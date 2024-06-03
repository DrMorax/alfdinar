// Type definitions
// types.ts
export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  quantity: number;
  imageurl: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  cart: CartItem[];
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Cart = CartItem[];
