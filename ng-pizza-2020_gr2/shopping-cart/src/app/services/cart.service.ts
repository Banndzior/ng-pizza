import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    //Mapping the obtained result to CartItem props
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for(let item of result) {
          //Flag: does exists or doesn`t
          let productExists = false

          //Loop: if the product id matches, increase quantity and product Exists
          for(let i in cartItems){
            if(cartItems[i].productId === item.product.id){
              cartItems[i].qty++
              productExists = true
              break;
            }
          }
          //Check: if product doesn`t exist, then add one
          if (!productExists) {
            cartItems.push(new CartItem(item.id, item.product));
          } 
        }
        
        return cartItems;
      })
    );
  }

  addProductToCart(product: Product ): Observable<any> {
    return this.http.post(cartUrl, {product});
  }
}
