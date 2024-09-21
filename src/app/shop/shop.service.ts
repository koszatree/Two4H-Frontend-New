import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Shop} from "./shop";
import {Observable} from "rxjs";
import {Shopdto} from "./shopdto";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  shops: Shop = new Shop();

  constructor(private http: HttpClient ) {}

  getShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>("http://localhost:8080/api/shopsData");
  }

  getShopById(id: number): Observable<Shop> {
    return this.http.get<Shop>(`http://localhost:8080/api/shopByIdData?id=${id}`);
  }

  getShopsByOwner(id: number): Observable<Shop[]> {
    return this.http.get<Shop[]>(`http://localhost:8080/api/shopsByOwner?id=${id}`);
  }

  editShop(id: number, shop: Shopdto): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(`http://localhost:8080/api/editShop?id=${id}`, shop, {headers: headers, responseType: "text"});
  }
}
