import { Injectable } from '@angular/core';
import * as http from "node:http";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product = new Product();

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/api/productData");
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/productByIdData?id=${id}`);
  }

  getImage(id: number) : string {
    return `http://localhost:8080/api/getProductImage?id=${id}`;
  }

  editProduct(id: number, product: Product): Observable<any>{
    return this.http.put(`http://localhost:8080/api/editProduct?id=${id}`, product, {responseType: 'text'});
  }
}
