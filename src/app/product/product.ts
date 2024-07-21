import {Shop} from "../shop/shop";

export class Product {
  id! : number;
  productName! : string;
  productDescription! : string;
  price! : number;
  stock! : number;
  image! : string;
  isActive!: boolean;
  shop! : Shop;
}
