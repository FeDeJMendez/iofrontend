import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Detail } from 'src/app/models/detail';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-sell-product',
  templateUrl: './sell-product.component.html',
  styleUrls: ['./sell-product.component.css']
})
export class SellProductComponent implements OnInit {
  sellForm: FormGroup;
  message: string = '';
  productList: Array<Product> = [];
  detailList: Array<Detail> = [];

  constructor(private productService: ProductService, private saleService: SaleService) { }

  ngOnInit(): void {
    this.sellForm = new FormGroup({
      barcode: new FormControl('',[Validators.required]),
      lot: new FormControl('',[Validators.required])
    });

    this.productService.getAll()
    .then(response => { 
      this.productList = response; 
    })
    .catch(error => {
      console.log(error);
    })
  }

  onSubmit(){
    let detail = new Detail()
    let bc = this.sellForm.get('barcode').value
    let lot = this.sellForm.get('lot').value
    let result: Array<Product> = []
    let product = new Product()
    this.productService.getAll()
      .then(response => { 
        this.productList = response; 
      })
      .catch(error => {
        console.log(error);
      });
    result = this.productList.filter(pr => pr.barcode == bc)
    product = result[0];
    console.log(product)
    detail.product = product
    detail.lot = lot 
    this.detailList.push(detail)
  }

  addSale(){
    this.saleService.add(this.detailList)
      .then(response  => {
        this.message = "Venta Realizada";
      })
      .catch(error =>{
        console.log(error.error.error.message)
        this.message = error.error.error.message;
        ;
      })
  }
}
