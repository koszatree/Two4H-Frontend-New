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
import { adminAuthenticationGuard } from './utils/guards/admin-authentication.guard';


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
  canActivate: [adminAuthenticationGuard],
},

{
  path: 'admin/users-list',
  component: UsersComponent,
  canActivate: [adminAuthenticationGuard],
},

{
  path: 'admin/edit-user',
  component: UserEditComponent,
  canActivate: [adminAuthenticationGuard],
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
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
