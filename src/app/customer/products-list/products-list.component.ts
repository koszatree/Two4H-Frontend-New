import { Component } from '@angular/core';
import {ProductService} from "../../product/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ShopService} from "../../shop/shop.service";
import {Product} from "../../product/product";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  products!: Product[];

  constructor(public productService: ProductService, private shopService: ShopService, public router: Router, private route: ActivatedRoute) {}


  fetchImage(id: number) : string {
    return  this.productService.getImage(id);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.shopService.getProductsFromShop(id).subscribe(
      data => {
        this.products = data;
      }
    )
  }

  goToShopsList() {
    this.router.navigate(['/order']);
  }

}
