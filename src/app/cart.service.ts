import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './products';
import { Shipping } from './shipping';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  shipping: Shipping | undefined;

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
  
  getShipping() {
    return this.shipping;
  }

  addShipping(shipping: Shipping) {
    this.shipping = shipping;
  }

  constructor(private http: HttpClient) { }
}
