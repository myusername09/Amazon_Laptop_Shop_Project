import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PaginationComponent } from './pagination/pagination.component';

import { FooterComponent } from './footer/footer.component';
import { OrderComponent } from './order/order.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './search.pipe';

import { RouterModule } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LogComponent } from './log/log.component';
import { LogoutComponent } from './logout/logout.component';
import { PayComponent } from './pay/pay.component';
import { NeworderComponent } from './neworder/neworder.component';
import { VieworderComponent } from './vieworder/vieworder.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ProductComponent,
    CartComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    WishlistComponent,
    PaginationComponent,
    FooterComponent,
       OrderComponent,
       
       SearchPipe,
       
       ServiceComponent,
       AboutUsComponent,
       LogComponent,
       LogoutComponent,
       PayComponent,
       NeworderComponent,
       VieworderComponent
       
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule,
    
    
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
