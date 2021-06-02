import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartViewComponent } from './cart-view/cart-view.component';
import { DescriptionComponent } from './description/description.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductsComponent } from './products/products.component';
import{ SearchComponent } from './search/search.component';
import {CustomerRegistrationComponent} from './customer-registration/customer-registration.component';
import {CustomerLoginComponent} from './customer-login/customer-login.component'
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path:'api/v1/latest-products',component:ProductsComponent},
  {path:'api/v1/products/:categoryslug/:productslug',component:DescriptionComponent},
  {path: 'api/v1/yourCart', component:CartViewComponent, canActivate:[AuthGuard]},
  {path:'api/v1/latest-products/:query',component:SearchComponent},
  {path:'api/v1/register',component:CustomerRegistrationComponent},
  {path:'api/v1/login',component:CustomerLoginComponent},
  {path:'api/v1/latest-products/:categories/:query',component:ProductCategoryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
