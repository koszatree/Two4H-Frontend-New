import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { OrderComponent } from './order/order.component';


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
  path: 'about',
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
