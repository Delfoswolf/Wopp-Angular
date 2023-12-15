import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { RegisterComponent } from './pages/register/register.component';
import { NewProductComponent } from './pages/products/new-product/new-product.component';
import { UpdateProductComponent } from './pages/products/update-product/update-product.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { WopComponent } from './pages/wop/wop.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'product/new', component: NewProductComponent},
  { path: 'product/updated', component: UpdateProductComponent},
  { path: 'product', component: ProductsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'about', component: WopComponent},
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'profile', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
