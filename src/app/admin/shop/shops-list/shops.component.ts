import {AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Shop} from "../../../shop/shop";
import {ActivatedRoute, Router} from "@angular/router";
import {ShopService} from "../../../shop/shop.service";
import {Shopdto} from "../../../shop/shopdto";
import {UserService} from "../../../user/user.service";
import {Userdto} from "../../../user/userdto";
import {Observable} from "rxjs";

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.css'
})
export class ShopsComponent implements OnInit{

  shops$!: Observable<Shopdto[]>;
  owners: Userdto[] = [];

  constructor(private router: Router, private shopService: ShopService, private userService: UserService, private route: ActivatedRoute, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.userService.getSellers().subscribe(data => {
      this.owners = data
    });
    this.shops$ = this.shopService.getShops();
  }

  getOwnerOfShop(id: number): Userdto | undefined/*{ firstName: string, lastName: string }*/ {
    if (this.owners && this.owners.length > 0) {
      return this.owners.find(owner => owner.id === id);
    } else {
      console.warn('Owners list is empty or not initialized');
      return undefined; // Return undefined if not found or owners not loaded
    }
  }

  shopData(id: number): void {
    this.router.navigate(['admin/edit-shop', id]);
  }

  goToHomePage(): void {
    this.router.navigate(['/admin']);
  }

  goToShopCreate(): void {
    this.router.navigate(['admin/shop-create']);
  }
}
