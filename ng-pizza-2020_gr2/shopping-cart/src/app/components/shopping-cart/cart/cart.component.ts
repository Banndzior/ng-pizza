import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
   // {id: 1, productId: 1, productName: 'Test 1', qty:4, price: 100},
   // {id: 2, productId: 2, productName: 'Test 2', qty:5, price: 150},
   // {id: 3, productId: 3, productName: 'Test 3', qty:3, price: 200},
   // {id: 4, productId: 4, productName: 'Test 4', qty:2, price: 300}
  ];

  cartTotal = 0

  constructor(
    private msg: MessengerService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription(){
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal(){
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  // Code below relevant when no API
  /* addProductToCart(product: Product){
    //Flag: does exists or doesn`t
    let productExists = false

    //Loop: if the product id matches, increase quantity and product Exists
    for(let i in this.cartItems){
      if(this.cartItems[i].productId === product.id){
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }
      //Check: if product doesn`t exist, then add one
    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }

    //All comment below gives duplication of push so WRONG
   /* //Pushing new product to cart
    if(this.cartItems.length === 0) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }else {
       // Increases the amount of a given id in the cart if user adds the same product several times
      for(let i in this.cartItems){
        if(this.cartItems[i].productId === product.id){
          this.cartItems[i].qty++
          break;
        }else{
        //No such product yet => Pushing new product to cart, id is checked
          this.cartItems.push({
            productId: product.id,
            productName: product.name,
            qty: 1,
            price: product.price
        })
      }
    }
    }

   this.calcCartTotal(); 
  
}*/

  

}