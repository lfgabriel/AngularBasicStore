import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();
  sum: number = 0;

  constructor(private cartService : CartService) {
    
   }

  ngOnInit(): void {
    this.items.forEach(a => this.sum += a.price);
  }

}
