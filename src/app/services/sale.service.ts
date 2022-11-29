import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interval, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private apiURL = '/api/sales/';
  httpOptions;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  add(details: Array<any>): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return lastValueFrom(this.http.post(this.apiURL, details, httpOptions));
  }
}
