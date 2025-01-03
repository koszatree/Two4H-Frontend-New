import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './customer/home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { OrderComponent } from './order/order.component';
import { AdminComponent } from './admin/admin.component';
import { SellerComponent } from './seller/seller.component';
import { UserEditComponent } from './admin/user/user-edit/user-edit.component';
import { UsersComponent } from './admin/user/users-list/users.component';
import { ProductsComponent} from "./admin/product/products-list/products.component";
import { adminAuthenticationGuard } from './utils/guards/admin-authentication.guard';
import {ProductEditComponent} from "./admin/product/product-edit/product-edit.component";
import {ShopsComponent} from "./admin/shop/shops-list/shops.component";
import {ProductCreateComponent} from "./admin/product/product-create/product-create.component";
import {ShopEditComponent} from "./admin/shop/shop-edit/shop-edit.component";
import {ShopCreateComponent} from "./admin/shop/shop-create/shop-create.component";
import {OwnerHomeComponent} from "./owner/owner-home/owner-home.component";
import {OwnerManageShopComponent} from "./owner/owner-manage-shop/owner-manage-shop.component";
import {ShopListComponent} from "./owner/shop-list/shop-list.component";
import {OwnerProductEditComponent} from "./owner/owner-product-edit/owner-product-edit.component";
import {ShopsListComponent} from "./customer/shops-list/shops-list.component";
import {ProductsListComponent} from "./customer/products-list/products-list.component";


const routes: Routes = [{
  path: '',
  component: LoginComponent
},

{
  path: 'home',
  component: HomeComponent,
},

  {
    path: 'owner',
    component: OwnerHomeComponent,
  },

  {
    path: 'owner/shops-list',
    component: ShopListComponent,
  },

  {
    path: 'owner/manage-shop/:id',
    component: OwnerManageShopComponent,
  },

  {
    path: 'owner/edit-product/:id',
    component: OwnerProductEditComponent,
  },

{
  path: 'register',
  component: RegisterComponent,
},

{
  path: 'seller',
  component: SellerComponent,
},

{
  path: 'admin',
  component: AdminComponent,
  // canActivate: [adminAuthenticationGuard],
},

{
  path: 'admin/users-list',
  component: UsersComponent,
  // canActivate: [adminAuthenticationGuard],
},

{
  path: 'admin/edit-user/:id',
  component: UserEditComponent,
  // canActivate: [adminAuthenticationGuard],
},

{
  path: 'account',
  component: AboutComponent,
},

{
  path: 'map',
  component: MapComponent,
},

{
  path: 'order',
  component: ShopsListComponent,
},

  {
    path: 'order/products/:id',
    component: ProductsListComponent,
  },

  {
    path: 'admin/product-list',
    component: ProductsComponent,
  },

  {
    path: 'admin/product-create',
    component: ProductCreateComponent,
  },

  {
    path: 'admin/edit-product/:id',
    component: ProductEditComponent,
  },

  {
    path: 'admin/shop-list',
    component: ShopsComponent,
  },

  {
    path: 'admin/edit-shop/:id',
    component: ShopEditComponent,
  },

  {
    path: 'admin/shop-create',
    component: ShopCreateComponent,
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
