import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../product/product.service";
import {Product} from "../../../product/product";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit{
  product: Product = new Product();

  constructor(private productService: ProductService, private route: ActivatedRoute,private router: Router, private location: Location) { }

  ngOnInit() : void {
    const id = this.route.snapshot.params['id'];
    this.productService.getProductById(id).subscribe(
      data=>
    {
      this.product.id = data.id;
      this.product.productName = data.productName;
      this.product.productDescription = data.productDescription;
      this.product.price = data.price;
      this.product.stock = data.stock;
      this.product.isActive = data.isActive;
    },
      error => {
        console.log('Error fetching products', error);
      });
  }

  edit(){
    let bodyData = {
      "id" : this.product.id,
      "productName" : this.product.productName,
      "productDescription" : this.product.productDescription,
      "price" : this.product.price,
      "stock" : this.product.stock,
      "isActive" : this.product.isActive,
      "shop" : this.product.shop,
      "image" : this.product.image,
    };

    this.productService.editProduct(this.product.id, bodyData).subscribe( (response: any) => {
        alert("Updated successfully!");
        this.router.navigate(['admin/product-list']);
      },
      (error: any) => {
        alert("Failed to update user");
      }
    );
  }

  fetchImage(id: number) : string {
    return  this.productService.getImage(id);
  }

  goBack(): void {
    this.location.back();
  }

}

