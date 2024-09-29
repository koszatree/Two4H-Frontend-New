import { Injectable } from '@angular/core';
import * as http from "node:http";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product";
import {Observable} from "rxjs";
import {Productdto} from "./productdto";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product = new Product();

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Productdto[]> {
    return this.http.get<Productdto[]>("http://localhost:8080/api/productData");
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<Productdto>(`http://localhost:8080/api/productByIdData?id=${id}`);
  }

  getActiveProducts(): Observable<Productdto[]> {
    return this.http.get<Productdto[]>("http://localhost:8080/api/activeProducts");
  }

  getImage(id: number) : string {
    return `http://localhost:8080/api/getProductImage?id=${id}`;
  }

  editProduct(id: number, product: Productdto): Observable<any>{
    return this.http.put(`http://localhost:8080/api/editProduct?id=${id}`, product, {responseType: 'text'});
  }
}
