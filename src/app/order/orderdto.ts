import {User} from "../user/user";
import {Product} from "../product/product";

export interface Orderdto {
  id: number;
  orderDate: Date;
  orderStatus: string;
  orderTotal: number;
  userId: number;
  products: Product[];
}
