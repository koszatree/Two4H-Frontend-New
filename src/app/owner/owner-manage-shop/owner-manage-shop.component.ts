import {Component, OnInit} from '@angular/core';
import {Shop} from "../../shop/shop";
import {User} from "../../user/user";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {ShopService} from "../../shop/shop.service";
import {UserService} from "../../user/user.service";
import {Location} from "@angular/common";
import {Shopdto} from "../../shop/shopdto";

@Component({
  selector: 'app-owner-manage-shop',
  templateUrl: './owner-manage-shop.component.html',
  styleUrl: './owner-manage-shop.component.css'
})
export class OwnerManageShopComponent implements OnInit{
  shop = new Shop();

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private shopService: ShopService, private location: Location) { this.shop.owner = new User(); }

  ngOnInit() : void {
    const id = this.route.snapshot.params['id'];
    this.shopService.getShopById(id).subscribe(
      data=>
      {
        this.shop.id = data.id;
        this.shop.shopName = data.shopName;
        this.shop.latitude = data.latitude;
        this.shop.longtude = data.longtude;
        this.shop.products = data.products;
        this.shop.isActive = data.isActive;
      },
      error => {
        console.log('Error fetching products', error);
      });
  }

  edit() {
    let bodyData: Shopdto = {
      "id" : this.shop.id,
      "shopName" : this.shop.shopName,
      "ownerId" : this.shop.owner.id, // Update to match the DTO property
      "latitude" : this.shop.latitude,
      "longtude" : this.shop.longtude, // Corrected typo from 'longtude' to 'longitude'
      "isActive" : this.shop.isActive,
    };

    console.log(bodyData);

    this.shopService.editShop(this.shop.id, bodyData).subscribe(
      (response: string) => { // Expect a string response from the backend
        alert(response); // Display the response message
        if (response === "Shop updated successfully!") {
          this.router.navigate(['admin/shop-list']);
        }
      },
      (error: any) => {
        alert(error.error); // Display the error message from the backend
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
