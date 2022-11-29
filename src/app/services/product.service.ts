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

  getByBarcode(barcode: string): Promise<any>{
    //return this.http.get(this.apiURL).toPromise();
    return lastValueFrom(this.http.get(this.apiURL + barcode));
  }

  editStock(barcode: string, stock: number): Promise<any>{
    return lastValueFrom(this.http.get(this.apiURL + barcode + '/' + stock))
  }

  editClass(barcode: string, classproduct: string): Promise<any>{
    return lastValueFrom(this.http.get(this.apiURL + '/editclass/' + barcode + '/' + classproduct))
  }

  recategorize(): Promise<any>{
    return lastValueFrom(this.http.get(this.apiURL + 'recategorize'))
  }
}
