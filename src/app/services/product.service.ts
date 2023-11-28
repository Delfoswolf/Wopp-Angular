import { HttpClient } from '@angular/common/http';
import { getSafePropertyAccessString } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ResponseProducts } from '../models/response-products';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL: string = environment.baseUrl;

  constructor( private http: HttpClient ) {}
  
  getProducts() {
    return this.http.get<ResponseProducts>(`${this.BASE_URL}/products`);
  }  
}
