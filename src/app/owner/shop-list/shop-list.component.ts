import {Component, OnInit} from '@angular/core';
import {Shop} from "../../shop/shop";
import {Router} from "@angular/router";
import {ShopService} from "../../shop/shop.service";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.css'
})
export class ShopListComponent implements OnInit{
  shops!: Shop[];

  constructor(private router: Router, private shopService: ShopService) {}

  ngOnInit(): void {
    this.shopService.getShopsByOwner(1).subscribe(data => {
      this.shops = data;
    })
  }

  shopData(id: number): void {
    this.router.navigate(['owner/manage-shop', id]);
  }

  goToHomePage(): void {
    this.router.navigate(['/owner']);
  }
}
