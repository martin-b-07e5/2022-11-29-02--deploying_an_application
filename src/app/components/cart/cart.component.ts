import {Component} from '@angular/core';
/*2. Import the FormBuilder service from the @angular/forms package.
 This service provides convenient methods for generating controls.
 https://angular.io/start/start-forms#define-the-checkout-form-model */
import {FormBuilder} from '@angular/forms';

import {CartService} from "../../services/cart.service";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();
  /* 4. To gather the user's name and address, use the FormBuilder group() method to set the checkoutForm property to
   a form model containing name and address fields. */

  checkoutForm = this.formBuilder.group({
    name: "",
    address: ""
  });

  // https://angular.io/start/start-data#display-the-cart-items
  constructor(
    private cartService: CartService,
    // 3. Inject the FormBuilder service in the CartComponent constructor().
    // This service is part of the ReactiveFormsModule module, which you've already imported.
    private formBuilder: FormBuilder,
  ) {
  }

  /* 5. Define an onSubmit() method to process the form.
   This method allows users to submit their name and address.
   In addition, this method uses the clearCart() method of the CartService to
    reset the form and clear the cart. */
  onSubmit(): void {
    //   Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submitted, this.checkoutForm.value");
    this.checkoutForm.reset();
  }
}
