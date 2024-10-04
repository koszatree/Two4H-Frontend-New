import {Productdto} from "../product/productdto";

export interface Shopdto {
  id: number;
  shopName: string;
  ownerId: number;
  latitude: number;
  longtude: number;
  isActive: boolean;
  products: Productdto[];
}
