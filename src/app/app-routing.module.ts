import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { RegisterComponent } from './pages/register/register.component';
import { NewProductComponent } from './pages/products/new-product/new-product.component';
import { UpdateProductComponent } from './pages/products/update-product/update-product.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'product/new',
  component: NewProductComponent
},
{
  path: 'product/updated',
  component: UpdateProductComponent
},
{
  path: 'product',
  component: ProductsComponent
},
{
  path: 'cart',
  component: CartComponent
},
{
  path: '', redirectTo: '', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
