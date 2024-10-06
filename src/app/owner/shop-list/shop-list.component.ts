import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Shop} from "../../shop/shop";
import {Router} from "@angular/router";
import {ShopService} from "../../shop/shop.service";
import {Observable} from "rxjs";
import {Shopdto} from "../../shop/shopdto";
import {Userdto} from "../../user/userdto";
import {UserService} from "../../user/user.service";
import {Product} from "../../product/product";
import {Productdto} from "../../product/productdto";
import {ProductService} from "../../product/product.service";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.css'
})
export class ShopListComponent implements OnInit, AfterViewChecked{
  shops$!: Observable<Shopdto[]>;
  activeProducts: Productdto[] = [];
  products: Productdto[] = [];

  constructor(private router: Router, private shopService: ShopService, private userService : UserService, private productService: ProductService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.productService.getActiveProducts().subscribe(data => {
      this.activeProducts = data
      console.log('Products loaded: ' + this.activeProducts);
    });
    this.shops$ = this.shopService.getShops();
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges(); // Force Angular to recheck the view after changes
  }

  getProductsFromShop(id: number) : Productdto[] | undefined {
    if (this.activeProducts && this.activeProducts.length > 0) {
      for(let product of this.activeProducts ){
        if(product.shopId === id){
          this.products.push(product)
        }
      }
      return this.products.length > 0 ? this.products : undefined;

    } else {
      console.warn('Product list is empty or not initialized');
      return undefined; // Return undefined if not found or owners not loaded
    }
  }

  shopData(id: number): void {
    this.router.navigate(['owner/manage-shop', id]);
  }

  goToHomePage(): void {
    this.router.navigate(['/owner']);
  }
}
