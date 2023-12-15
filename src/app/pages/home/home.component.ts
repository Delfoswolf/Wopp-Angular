import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from 'src/app/interfaces/product';

import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/services/store.service';

const ROWS_HEIGHT : { [id: number] : number } = {
  1: 370,   // 1: 400,
  3: 370,   // 3: 335,
  4: 370    // 4: 350
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  columnsToShow = 3;
  rowHeight = ROWS_HEIGHT[ this.columnsToShow ];
  showCategory: string | undefined;

  products: Array<Product> | undefined;
  sort: string = 'desc';
  count: string = '12';
  productsSubscription: Subscription | undefined;
  
  

  constructor(
    private cartService: CartService,
    private storeService: StoreService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe( data => {
    console.log( data );

    this.products = data.data;
  });
  
}

  ngOnDestroy(): void {
    // Si existe una subcripcion la eliminamos para evitar fugas de memoria al realizar varias subscripciones tras la multiple recarga del componente
    if( this.productsSubscription ) {
      this.productsSubscription.unsubscribe();
    }
  }

  getProducts() {
    console.log(this.showCategory);
    
    this.productsSubscription = this.storeService
      .getAllProductByCategory( this.showCategory )
        .subscribe( _products => { 
          this.products = _products.data;
        });
  }

  onColumnsToShow( numberCols: any ) : void {
    this.columnsToShow = numberCols;
    this.rowHeight = ROWS_HEIGHT[ this.columnsToShow ];
  }

  onShowCategory( newCategory: any ) : void {
    this.showCategory = newCategory;
    this.getProducts();
  }

  onAddToCart( product: Product ) : void {
    // CartItem = Product [Entities/Model]
    this.cartService.addToCart({
      id: product._id,
      product: product.urlImage,
      name: product.name,
      price: product.price,
      quantity: 1,
      
    });
  }

  onOrderChange( newOrder: any ) : void {
    this.sort = newOrder;
    this.getProducts();
  }

  onItemsShowedChange( newCount: any ) : void {
    this.count = newCount.toString();
    this.getProducts();
  }
}