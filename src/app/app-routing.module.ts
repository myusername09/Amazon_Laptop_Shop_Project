import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { catchError } from 'rxjs';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrderComponent } from './order/order.component';
import { LogComponent } from './log/log.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LogoutComponent } from './logout/logout.component';
import { PayComponent } from './pay/pay.component';
import { NeworderComponent } from './neworder/neworder.component';
import { VieworderComponent } from './vieworder/vieworder.component';




const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
{path:'search',component:SearchComponent},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'product',component:ProductComponent},
{path:'wishlist',component:WishlistComponent},
{path:'cart',component:CartComponent},
{path:'order',component:OrderComponent},
{path: 'log', component:LogComponent},
{path:'service', component:ServiceComponent},
{path:'about-us',component:AboutUsComponent},
{path:'logout',component:LogoutComponent},
{path:'pay',component:PayComponent},
{path:'neworder',component:NeworderComponent},
{path:'vieworder',component:VieworderComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
