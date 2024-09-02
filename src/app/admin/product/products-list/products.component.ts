import {Component, OnInit} from '@angular/core';
import {Product} from "../../../product/product";
import {Router} from "@angular/router";
import {UserService} from "../../../user/user.service";
import {ProductService} from "../../../product/product.service";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products!: Product[];

  constructor(
    private router: Router,
    private productService: ProductService,
  ) {}

  fetchImage(id: number) : string {
      return  this.productService.getImage(id);
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  productData(id: number): void {
    this.router.navigate(['admin/edit-product', id]);
  }

  goToHomePage(): void {
    this.router.navigate(['/admin']);
  }

}
