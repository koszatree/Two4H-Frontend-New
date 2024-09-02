import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
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


const routes: Routes = [{
  path: '',
  component: LoginComponent
},

{
  path: 'home',
  component: HomeComponent,

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
  component: OrderComponent,
},

  {
    path: 'admin/product-list',
    component: ProductsComponent,
  },

  {
    path: 'admin/edit-product/:id',
    component: ProductEditComponent,
  },

  {
    path: 'admin/shop-list',
    component: ShopsComponent,
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
