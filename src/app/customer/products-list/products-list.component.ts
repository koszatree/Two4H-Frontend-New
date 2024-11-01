import { Component } from '@angular/core';
import {ProductService} from "../../product/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ShopService} from "../../shop/shop.service";
import {Product} from "../../product/product";
import {Productdto} from "../../product/productdto";
import {CartComponent} from "../cart/cart.component";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  products!: Productdto[];

  constructor(public productService: ProductService, private shopService: ShopService, public router: Router, private route: ActivatedRoute, private cart: CartComponent) {}


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

  addToCart(product: Productdto) {
    let productInCartCount = this.cart.howManyProductsOfId(product.id);

    let bodydata: Productdto = {
      "id": product.id,
      "productName": product.productName,
      "productDescription": product.productDescription,
      "price": product.price,
      "stock": productInCartCount >= 1 ? productInCartCount + 1 : 1,
      "image": product.image,
      "shopId": product.shopId,
      "isActive": product.isActive
    }

    if(productInCartCount >= 1) {
      console.log("JEST!")
      console.log( this.cart.productsInCart[this.cart.getIndexOfProductInCart(product.id)])
      this.cart.productsInCart[this.cart.getIndexOfProductInCart(product.id)] = bodydata;
    }
    else{
      this.cart.productsInCart.push(bodydata);
    }

    console.log(this.cart.productsInCart);
  }

}
