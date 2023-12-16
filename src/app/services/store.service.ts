import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { ResponseProducts } from '../interfaces/response-products';
import { ResponseCategories } from '../interfaces/response-categories';
import { environment } from 'src/environments/environment.development';

const STORE_BASE_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor( private httpClient: HttpClient ) {}

  getAllProductByCategory( category: string | undefined ) {
    return this.httpClient.get<ResponseProducts>( 
      `${ STORE_BASE_URL }/products/category/${category}`
    )
  }

  getAllCategories() : Observable<ResponseCategories> {

    // Establecemos una peticion HTTP de tipo GET para obtener todas las categorias como un Observable
    return this.httpClient.get<ResponseCategories>(
      `${ STORE_BASE_URL }/categories`
    );
  }

}
