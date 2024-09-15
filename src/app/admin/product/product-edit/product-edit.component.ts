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

      console.log(data)
    },
      error => {
        console.log('Error fetching products', error);
      });
  }

  edit() {
    // Create bodyData to match ProductDTO structure
    let bodyData = {
      id: this.product.id,
      productName: this.product.productName,
      productDescription: this.product.productDescription,
      price: this.product.price,
      stock: this.product.stock,
      image: this.product.image,
      isActive: this.product.isActive
    };
    //
    console.log(bodyData);

    this.productService.editProduct(this.product.id, bodyData).subscribe(
      (response: string) => {
        alert(response); // Display the response message
        if (response === "Product edited successfully") {
          this.router.navigate(['admin/product-list']);
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

  goBack(): void {
    this.location.back();
  }

}

