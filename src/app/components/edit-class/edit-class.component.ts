import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {
  editClassForm: FormGroup;
  message: string = '';
  productList: Array<Product> = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.editClassForm = new FormGroup({
      barcode: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      stock: new FormControl('',[Validators.required])
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
    let pass = this.editClassForm.get('password').value
    let bc: string
    let cl: string
    if (pass == "Admin123") {
      bc = this.editClassForm.get('barcode').value
      cl = this.editClassForm.get('classproduct').value
      this.productService.editClass(bc, cl)
      this.message = "Modificado con éxito"
    }
    else {
      this.message = "Clave de Admin Incorrecta"
    }
  }

}
