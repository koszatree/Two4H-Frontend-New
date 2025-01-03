import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './customer/home/home.component';
import { MapComponent } from './map/map.component';
import { AdminComponent } from './admin/admin.component';
import { SellerComponent } from './seller/seller.component';
import { UserEditComponent } from './admin/user/user-edit/user-edit.component';
import { UsersComponent } from './admin/user/users-list/users.component';
import { ShopsComponent } from './admin/shop/shops-list/shops.component';
import { ShopEditComponent } from './admin/shop/shop-edit/shop-edit.component';
import { ProductsComponent } from './admin/product/products-list/products.component';
import { ProductEditComponent } from './admin/product/product-edit/product-edit.component';
import { TokenService } from './utils/guards/token-service';
import {NgOptimizedImage} from "@angular/common";
import { ProductCreateComponent } from './admin/product/product-create/product-create.component';
import { ShopCreateComponent } from './admin/shop/shop-create/shop-create.component';
import { OwnerHomeComponent } from './owner/owner-home/owner-home.component';
import { OwnerManageShopComponent } from './owner/owner-manage-shop/owner-manage-shop.component';
import { ShopListComponent } from './owner/shop-list/shop-list.component';
import { OwnerProductEditComponent } from './owner/owner-product-edit/owner-product-edit.component';
import { ShopsListComponent } from './customer/shops-list/shops-list.component';
import { ProductsListComponent } from './customer/products-list/products-list.component';
import { CartComponent } from './customer/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    OrderComponent,
    HomeComponent,
    MapComponent,
    AdminComponent,
    SellerComponent,
    UserEditComponent,
    UsersComponent,
    ShopsComponent,
    ShopEditComponent,
    ProductsComponent,
    ProductEditComponent,
    ProductCreateComponent,
    ShopCreateComponent,
    OwnerHomeComponent,
    OwnerManageShopComponent,
    ShopListComponent,
    OwnerProductEditComponent,
    ShopsListComponent,
    ProductsListComponent,
    CartComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgOptimizedImage
    ],
  providers: [
    provideClientHydration(),
    TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
