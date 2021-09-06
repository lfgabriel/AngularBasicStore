import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

import { Shipping } from '../shipping';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();
  itemsSum: number = 0;
  shippingPrice: number = 0;
  total: number = 0;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private cartService : CartService, private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
    this.items.forEach(a => this.itemsSum += a.price);
    const auxShippingValue = this.cartService.getShipping()?.price; 
    if (auxShippingValue) {
      this.shippingPrice = auxShippingValue;
      this.total = this.itemsSum + this.shippingPrice;
    }
    else {
      this.shippingPrice = 0;
      this.total = this.itemsSum;
    }
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.itemsSum = 0;
    this.total = 0;
    this.shippingPrice = 0;
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}