import {User} from "../user/user";
import {Product} from "../product/product";

export class Order {
  id! : number;
  orderDate! : string;
  orderStatus! : string;
  orderTotal! : number;
  user! : User;
  products!: Product[];
}
