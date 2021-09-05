import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();
  sum: number = 0;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private cartService : CartService, private formBuilder: FormBuilder,) {
    
   }

  ngOnInit(): void {
    this.items.forEach(a => this.sum += a.price);
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.sum = 0;
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}