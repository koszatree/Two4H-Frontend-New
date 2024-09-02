import {Component, OnInit} from '@angular/core';
import {Shop} from "../../../shop/shop";
import {Router} from "@angular/router";
import {ShopService} from "../../../shop/shop.service";

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.css'
})
export class ShopsComponent implements OnInit {

  shops!: Shop[];

  constructor(private router: Router, private shopService: ShopService) {}

  ngOnInit(): void {
    this.shopService.getShops().subscribe(data => {
      this.shops = data;
    })
  }


  goToHomePage(): void {
    this.router.navigate(['/admin']);
  }
}
