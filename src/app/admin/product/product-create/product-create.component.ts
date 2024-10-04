import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../../product/product";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {

  product: Product = new Product();

  constructor(private http: HttpClient, private router: Router) {}

  addProduct(): void{
    let bodyData = {
      "productName" : this.product.productName,
      "productDescription" : this.product.productDescription,
      "price" : this.product.price,
      "stock" : this.product.stock,
      "image" : this.product.image
    };

    this.http.post("http://localhost:8080/api/addProduct", bodyData, {responseType: 'text'}).subscribe((resultData: any) => {
      alert("Product added successfully!");
      this.router.navigate(['admin/product-list']);
    });
  }

  goBack(): void {
    this.router.navigate(['admin/product-list']);
  }
}
