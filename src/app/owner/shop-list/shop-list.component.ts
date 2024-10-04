import {Component, OnInit} from '@angular/core';
import {Shop} from "../../shop/shop";
import {Router} from "@angular/router";
import {ShopService} from "../../shop/shop.service";
import {Observable} from "rxjs";
import {Shopdto} from "../../shop/shopdto";
import {Userdto} from "../../user/userdto";
import {UserService} from "../../user/user.service";
import {Product} from "../../product/product";
import {Productdto} from "../../product/productdto";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.css'
})
export class ShopListComponent implements OnInit{
  shops$!: Observable<Shopdto[]>;
  owners: Userdto[] = [];
  products$!: Observable<Productdto[]>;

  constructor(private router: Router, private shopService: ShopService, private userService : UserService) {}

  ngOnInit(): void {
    this.userService.getSellers().subscribe(data => {
      this.owners = data
      console.log('Owners loaded: ' + this.owners);
    });
    this.shops$ = this.shopService.getShops();
  }

  getProductsFromShop(id: number) : Observable<Productdto[]>{
     return this.products$ = this.shopService.getProductsFromShop(id);
  }

  shopData(id: number): void {
    this.router.navigate(['owner/manage-shop', id]);
  }

  goToHomePage(): void {
    this.router.navigate(['/owner']);
  }
}
