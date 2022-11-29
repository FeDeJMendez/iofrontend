import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  message: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      barcode: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      stock: new FormControl('',[Validators.required])
    });
  }

  onSubmit(){
    let product = new Product();
    product.barcode = this.productForm.get('barcode').value
    product.description = this.productForm.get('description').value
    product.price = this.productForm.get('price').value
    product.stock = this.productForm.get('stock').value
    product.classProduct = "C"
    
    this.productService.add(product)
      .then(response  => {
        this.message = "Nuevo Producto Agregado";
      })
      .catch(error =>{
        this.message = "Ocurrió un error durante la carga del nuevo producto";
      })
  }
}
