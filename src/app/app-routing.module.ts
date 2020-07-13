import { NgModule } from '@angular/core';
import { CanActivate, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/commun/components/home/home.component';
import { CoursesComponent } from './modules/courses/components/courses/courses.component';
import { LoginComponent } from './modules/authen/components/login/login.component';
import { AboutComponent } from './modules/commun/components/about/about.component';
import { OrdersComponent } from './modules/orders/components/orders/orders.component';
import { AdminCoursesComponent } from './modules/admin/components/admin-courses/admin-courses.component';
import { LoginService } from 'src/app/modules/authen/services/login.service';
import { AdminService } from 'src/app/modules/admin/services/admin.service';
import { ShoppingCartComponent } from './modules/shoppingCart/components/shopping-cart/shopping-cart.component';
import { SuccessOrderComponent } from './modules/orders/components/success-order/success-order.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'courses',
  component: CoursesComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'orders',
  component: OrdersComponent,
  canActivate: [LoginService]
},
{
  path: 'admin-courses',
  component: AdminCoursesComponent,
  canActivate: [LoginService, AdminService]
},
{
  path: 'shooping-cart',
  component: ShoppingCartComponent
},
{
  path: 'success-order/:id',
  component: SuccessOrderComponent,
  canActivate: [LoginService]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
