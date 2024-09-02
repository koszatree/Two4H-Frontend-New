import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Shop} from "./shop";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  shops: Shop = new Shop();

  constructor(private http: HttpClient ) {}

  getShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>("http://localhost:8080/api/shopsData");
  }
}
