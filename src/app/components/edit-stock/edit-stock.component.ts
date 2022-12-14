import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {
  editStockForm: FormGroup;
  message: string = '';
  productList: Array<Product> = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.editStockForm = new FormGroup({
      barcode: new FormControl('',[Validators.required]),
      stock: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
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
    let pass = this.editStockForm.get('password').value
    let bc: string
    let st: number
    if (pass == "Admin123") {
      bc = this.editStockForm.get('barcode').value
      st = this.editStockForm.get('stock').value
      this.productService.editStock(bc, st)
      this.message = "Modificado con éxito"
    }
    else {
      this.message = "Clave de Admin Incorrecta"
    }
  }

}
