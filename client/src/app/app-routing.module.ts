import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'shop',loadChildren:() => import('./shop/shop.module').then(mod => mod.ShopModule)},
  {path: '**',redirectTo:'home',pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
