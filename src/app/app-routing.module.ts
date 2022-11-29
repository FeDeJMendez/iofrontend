import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { EditStockComponent } from './components/edit-stock/edit-stock.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'edit-stock', component: EditStockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
