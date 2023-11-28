import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit{
  @Input() fullWidthMode = false;
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter();


  constructor() { 
    console.log( `hola aqui`);
    
  }
  
  ngOnInit(): void {
      
  }

  onAddToCart(): void {
      this.addToCart.emit(this.product)
  }

}
