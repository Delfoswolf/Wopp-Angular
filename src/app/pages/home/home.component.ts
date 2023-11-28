import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

const ROWS_HEIGHT: { [id:number]: number } = { 1: 400, 3: 335, 4: 350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'

})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  products!: Product[];

  constructor(
    private cartService: CartService,
    private productService: ProductService 
  ) { }

  ngOnInit(): void {
      this.productService.getProducts().subscribe( data => {
        console.log( data );
        
        this.products = data.data;
      });
  }

  onColumnsCountChange( colsNum: number) {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.urlImage,
      name: product.name,
      price: product.price,
      quantity: 1,
      id: product._id,
    });
  }
}
