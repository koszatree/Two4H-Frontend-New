import {Component, OnInit} from '@angular/core';
import {Userdto} from "../../user/userdto";
import {UserService} from "../../user/user.service";
import {Observable} from "rxjs";
import {Shopdto} from "../../shop/shopdto";
import {ShopService} from "../../shop/shop.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shops-list',
  templateUrl: './shops-list.component.html',
  styleUrl: './shops-list.component.css'
})
export class ShopsListComponent implements OnInit {

  shops$!: Observable<Shopdto[]>;
  owners: Userdto[] = [];

  constructor(private userService : UserService, private shopService: ShopService, private router: Router) {}

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

  goToHomePage(): void {
    this.router.navigate(['/home']);
  }

  viewProducts(id: number): void {
    this.router.navigate(['order/products', id]);
  }

}
