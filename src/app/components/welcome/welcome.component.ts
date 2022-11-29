import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  date = new Date()
  hoy = this.date.toLocaleDateString()
  season: string
  productList: Array<Product> = [];
  sellProducts: Array<Product> = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.recategorize()

    if ((this.date.getMonth() + 1) < 3) {
      this.season = "ALTA"
    }
    else {
      this.season = "BAJA"
    }
    
    this.productService.getAll()
    .then(response => { 
      this.productList = response; 
      console.log(this.productList)
      for (let product of this.productList) {
        if ((product.classProduct=="C") && (product.stock < 5)) {
          this.sellProducts.push(product)
        }
      }
    })
    .catch(error => {
      console.log(error);
    })

    
  }

}
