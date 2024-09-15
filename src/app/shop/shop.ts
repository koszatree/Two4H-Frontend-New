import {User} from "../user/user";
import {Product} from "../product/product";

export class Shop {
  id! : number;
  shopName! : string;
  latitude! : number;
  longtude! : number;
  isActive! : boolean;
  owner! : User;
  products!: Product[];
}
