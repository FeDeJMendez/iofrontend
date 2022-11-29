import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { EditStockComponent } from './components/edit-stock/edit-stock.component';
import { EditClassComponent } from './components/edit-class/edit-class.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { SellProductComponent } from './components/sell-product/sell-product.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'edit-stock', component: EditStockComponent },
  { path: 'edit-class', component: EditClassComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'sale', component: SellProductComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
