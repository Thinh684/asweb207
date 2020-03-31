import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
// import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import {ManagerComponent} from './manager/manager.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'product/add', component: ProductAddComponent},
  {path: 'product', component: ProductListComponent},
  {path: 'product/:productID',component: ProductDetailComponent},
  {path: 'Product/edit/:productID', component: ProductEditComponent},
  {path: 'manager', component: ManagerComponent}
  // {path: '**', component: NotFoundComponent}
] 

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }