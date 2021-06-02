import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CommonService } from './common.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DescriptionComponent } from './description/description.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { SearchComponent } from './search/search.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import {UserAccountService} from './user-account.service';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import {AuthGuard} from './auth.guard'
import {TokenInterceptorService} from 'src/app/token-interceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DescriptionComponent,
    CartViewComponent,
    SearchComponent,
    ProductCategoryComponent,
    CustomerRegistrationComponent,
    CustomerLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CommonService, AuthGuard,UserAccountService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
