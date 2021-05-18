import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CommonService } from './common.service';
import { HttpClientModule } from '@angular/common/http';
import { DescriptionComponent } from './description/description.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { SearchComponent } from './search/search.component';
import { ProductCategoryComponent } from './product-category/product-category.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DescriptionComponent,
    CartViewComponent,
    SearchComponent,
    ProductCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
