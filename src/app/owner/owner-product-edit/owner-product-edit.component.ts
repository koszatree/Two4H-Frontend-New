import {Component, OnInit} from '@angular/core';
import {Productdto} from "../../product/productdto";
import {ProductService} from "../../product/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-owner-product-edit',
  templateUrl: './owner-product-edit.component.html',
  styleUrl: './owner-product-edit.component.css'
})
export class OwnerProductEditComponent implements OnInit{
  product: Productdto = {
    id: 0,
    productName: '',
    productDescription: '',
    price: 0,
    stock: 0,
    image: '',
    shopId: 0,
    isActive: false
  };

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
        this.product.shopId = data.shopId;
        this.product.isActive = data.isActive;

        console.log(data)
      },
      error => {
        console.log('Error fetching products', error);
      });
  }

  edit(shopId: number) {
    let bodyData = {
      id: this.product.id,
      productName: this.product.productName,
      productDescription: this.product.productDescription,
      price: this.product.price,
      stock: this.product.stock,
      image: this.product.image,
      shopId: this.product.shopId,
      isActive: this.product.isActive
    };

    console.log(bodyData);

    this.productService.editProduct(this.product.id, bodyData).subscribe(
      (response: string) => {
        alert(response); // Display the response message
        if (response === "Product edited successfully") {
          this.router.navigate(['owner/manage-shop', shopId]);
        }
      },
      (error: any) => {
        alert("Failed to update product"); // Adjusted message to match context
      }
    );
  }

  fetchImage(id: number) : string {
    return  this.productService.getImage(id);
  }

  goBack(id: number): void {
    this.router.navigate(['owner/manage-shop', id]);
  }

}
