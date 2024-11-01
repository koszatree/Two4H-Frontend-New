import {Component, OnInit} from '@angular/core';
import {Shop} from "../../shop/shop";
import {User} from "../../user/user";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {ShopService} from "../../shop/shop.service";
import {UserService} from "../../user/user.service";
import {Location} from "@angular/common";
import {Shopdto} from "../../shop/shopdto";
import {Product} from "../../product/product";
import {ProductService} from "../../product/product.service";
import {Productdto} from "../../product/productdto";
import {response} from "express";
import {Userdto} from "../../user/userdto";

@Component({
  selector: 'app-owner-manage-shop',
  templateUrl: './owner-manage-shop.component.html',
  styleUrl: './owner-manage-shop.component.css'
})
export class OwnerManageShopComponent implements OnInit{
  shop!: any;
  owner!: Userdto;
  productsInShop!: Productdto[];
  activeProducts!: Productdto[];
  product!: Productdto;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private shopService: ShopService, private userService: UserService ,private location: Location, private productService: ProductService) { /*this.shop.ownerId = new User();*/ }

  fetchImage(id: number) : string {
    return  this.productService.getImage(id);
  }

  ngOnInit() : void {
    this.shop = {};

    const id = this.route.snapshot.params['id'];

    this.shopService.getShopById(id).subscribe(
      data=>
      {
        this.shop.id = data.id;
        this.shop.shopName = data.shopName;
        this.shop.ownerId = data.ownerId;
        this.shop.latitude = data.latitude;
        this.shop.longtude = data.longtude;
        this.shop.products = data.products;
        this.shop.isActive = data.isActive;

        // Getting shop owner as UserDto
        this.userService.getUserById(this.shop.ownerId).subscribe(
          data => {
            this.owner = data;
          }
        )
      },
      error => {
        console.log('Error fetching products', error);
      });

    this.productService.getActiveNeutralProducts().subscribe(
      data => {
        this.activeProducts = data;
        console.log(data);
      }
    )

    this.shopService.getProductsFromShop(id).subscribe(
      data => {
        this.productsInShop = data;
        console.log(this.productsInShop);
      }
    )
  }

  edit() {
    let bodyData: Shopdto = {
      "id" : this.shop.id,
      "shopName" : this.shop.shopName,
      "ownerId" : this.shop.ownerId,
      "latitude" : this.shop.latitude,
      "longtude" : this.shop.longtude,
      "products" : this.shop.products,
      "isActive" : this.shop.isActive,
    };

    console.log(bodyData);

    this.shopService.editShop(this.shop.id, bodyData).subscribe(
      (response: string) => {
        alert(response);
        if (response === "Shop updated successfully!") {
          this.router.navigate(['owner/shops-list']);
        }
      },
      (error: any) => {
        alert(error.error);
      }
    );
  }

  addProduct() {
    if(!this.product){
      alert("Select a product!!");
      return;
    }

    let bodyData: Productdto = {
      "id": this.product.id,
      "productName": this.product.productName,
      "productDescription": this.product.productDescription,
      "price": this.product.price,
      "stock": this.product.stock,
      "image": this.product.image,
      "shopId": this.product.shopId,
      "isActive": this.product.isActive,
    };

    this.shopService.addProduct(this.shop.id, bodyData).subscribe(
      (response: string) => {
        alert(response);
        location.reload();
      },
      (error: any) => {
        alert(error.error);
      }
    )
  }

  goBack(): void {
    this.location.back();
  }

  editProduct(id: number): void {
    this.router.navigate(['owner/edit-product', id]);
  }
}
