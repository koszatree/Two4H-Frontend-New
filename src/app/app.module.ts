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
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { AdminComponent } from './admin/admin.component';
import { SellerComponent } from './seller/seller.component';
import { EditComponent } from './admin/edit/edit.component';
import { UserEditComponent } from './admin/user-edit/user-edit.component';
import { UsersComponent } from './admin/users/users.component';
import { ShopsComponent } from './admin/shops/shops.component';
import { ShopEditComponent } from './admin/shop-edit/shop-edit.component';
import { ProductsComponent } from './admin/products/products.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';

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
    EditComponent,
    UserEditComponent,
    UsersComponent,
    ShopsComponent,
    ShopEditComponent,
    ProductsComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
