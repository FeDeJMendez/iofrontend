import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interval, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiURL = '/api/products/';
  httpOptions;

  constructor(private http: HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  
  getAll(): Promise<any>{
    //return this.http.get(this.apiURL).toPromise();
    return lastValueFrom(this.http.get(this.apiURL));
  }

  editStock(barcode: string, stock: number): Promise<any>{
    return lastValueFrom(this.http.get(this.apiURL + barcode + '/' + stock))
  }
}