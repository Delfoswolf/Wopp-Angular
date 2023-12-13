import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cart = new BehaviorSubject<Cart>({ items: []});

  constructor(private _snackBar: MatSnackBar) { }

  addToCart(newItem: CartItem): void {
    const items = [...this.cart.value.items];
    
    const itemInCart = items.find(item => item.id == newItem.id);
    
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(newItem);  
    }
    

    this.cart.next( { items } );
    this._snackBar.open('1 item agregado al carro.', 'Ok', { duration: 3000});
  }

  removeQuantity(item: CartItem): void {
    let itemForRemoval: CartItem | undefined;
    
    let filteredItems : Array<CartItem> = this.cart.value.items.map((_item: CartItem) =>{
      if(_item.id === item.id)
      _item.quantity--;
      
        if(_item.quantity === 0) {
          itemForRemoval = _item;
        }

      return _item;
    });

    if (itemForRemoval) {
      filteredItems = this.removeFromCart(itemForRemoval, false)
    }

    this.cart.next({ items: filteredItems });
    this._snackBar.open('1 item fue removido del carrito.', 'Ok',{
      duration: 3000
    });
  }

  getTotal(items: Array<CartItem>): number{
    return items.
      map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open('Carrito sin productos.', 'Ok', {
      duration : 3000
    });
  }

  removeFromCart(item: CartItem, update = true): Array<CartItem> {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );

    if(update) {
      this.cart.next({ items: filteredItems });
      this._snackBar.open('1 item removido del carro', 'Ok', {
      duration: 3000
    });
    }

    return filteredItems;
  }
}
