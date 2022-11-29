import {Component} from '@angular/core';
import {CartService} from 'src/app/services/cart.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {

  /* 3. Define a shippingCosts property that sets the shippingCosts property
    using the getShippingPrices() method from the CartService.
   Initialize the shippingCosts property inside ngOnInit() method.
   https://angular.io/start/start-data#configuring-the-shippingcomponent-to-use-cartservice */
  shippingCosts!: Observable<{ type: string, price: number }[]>
  // shippingCost!: Observable<{ type: string; price: number }[]>  // la corrección pone punto y coma

  /* Inject the cart service in the ShippingComponent constructor().
    https://angular.io/start/start-data#configuring-the-shippingcomponent-to-use-cartservice */
  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
