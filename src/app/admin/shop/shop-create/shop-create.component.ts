import {Component, OnInit} from '@angular/core';
import {Shop} from "../../../shop/shop";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../../../user/user";
import {UserService} from "../../../user/user.service";

@Component({
  selector: 'app-shop-create',
  templateUrl: './shop-create.component.html',
  styleUrl: './shop-create.component.css'
})
export class ShopCreateComponent implements OnInit{
  shop = new Shop();
  owners!: User[];

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { this.shop.owner = new User();}

  ngOnInit() {
    this.userService.getSellers().subscribe(data => this.owners = data);
  }

  addShop() {
    let bodyData = {
      "shopName" : this.shop.shopName,
      "ownerId" : this.shop.owner.id,
      "latitude" : this.shop.latitude,
      "longtude" : this.shop.longtude,
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post("http://localhost:8080/api/addShop", bodyData, {headers, responseType: 'text'}).subscribe( (response: any) => {
      alert(response);
      this.router.navigate(['admin/shop-list']);
    });
  }

  goBack(): void {
    this.router.navigate(['admin/shop-list']);
  }
}
