import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../../product/product.service";
import {Productdto} from "../../../product/productdto";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products!: Productdto[];

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

  goToProductCreate(): void {
    this.router.navigate(['/admin/product-create']);
  }

}
