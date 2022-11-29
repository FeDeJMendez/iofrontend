import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { EditStockComponent } from './components/edit-stock/edit-stock.component';
import { SellProductComponent } from './components/sell-product/sell-product.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EditClassComponent } from './components/edit-class/edit-class.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    EditStockComponent,
    SellProductComponent,
    WelcomeComponent,
    EditClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
