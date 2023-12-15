import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { ResponseProducts } from '../interfaces/response-products';
import { ResponseCategories } from '../interfaces/response-categories';

const STORE_BASE_URL = 'http://localhost:2023/api/products';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor( private httpClient: HttpClient ) {}

  getAllProducts( limit: string = '12', sort: string = 'desc', category?: string ) : Observable<Array<Product>> {

    // Establecemos una peticion HTTP de tipo GET para obtener todos los productos como un Observable
    return this.httpClient.get<Array<Product>>(
      `${ STORE_BASE_URL }/products${ category ? '/category/' + category : '' }?sort=${ sort }&limit=${ limit }`
    );
  }

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
