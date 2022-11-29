import {Injectable} from '@angular/core';
import {Product} from "../products";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // 2. In the CartService class, define an items property to store the array
  // of the current products in the cart.
  items: Product[] = [];

  /*Inject HttpClient into the CartService constructor().
  * https://angular.io/start/start-data#configure-cartservice-to-use-httpclient*/
  constructor(private http: HttpClient) {
  }

  // 3. Define methods to add items to the cart, return cart items, and clear the
  // cart items.

  addToCart(product: Product) {
    // The addToCart() method appends a product to an array of items
    this.items.push(product);
  }

  getItems() {
    // The getItems() method collects the items users add to the cart and
    // returns each item with its associated quantity
    return this.items;
  }

  clearCart() {
    // The clearCart() method returns an empty array of items, which
    // empties the cart
    this.items = [];
    return this.items;
  }

  /* method that uses the HttpClient get() method.
  * https://angular.io/start/start-data#configure-cartservice-to-get-shipping-prices */
  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
  }

}
