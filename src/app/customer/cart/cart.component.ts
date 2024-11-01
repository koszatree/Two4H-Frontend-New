import {Component, Injectable} from '@angular/core';
import {Product} from "../../product/product";
import {Productdto} from "../../product/productdto";
import {ProductService} from "../../product/product.service";
import {Router} from "@angular/router";
import {OrderService} from "../../order/order.service";

@Injectable({ providedIn: 'any' })
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  productsInCart!: Productdto[];

  constructor(private productService: ProductService, private router: Router, private orderService: OrderService) { this.productsInCart = [] }

  howManyProductsOfId(id: number): number{
    let counter = 0;

    if(!Array.isArray(this.productsInCart) || this.productsInCart.length == 0) {
      return counter;
    }

    this.productsInCart.forEach(product => {
      if(product.id == id){
        counter = product.stock;
    }});
    return counter;
  }

  getIndexOfProductInCart(id: number): number{
    let index = -1;
    if(!Array.isArray(this.productsInCart) || this.productsInCart.length == 0) {
      return index;
    }

    this.productsInCart.forEach(product => {
      index++;
      if(product.id == id){

      }});
    return index;
  }
}
