import { Component } from "@angular/core";

import { products } from "../../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  /* 4. Define the behavior that happens when the user clicks the button.
  The parent, ProductListComponent —not the ProductAlertsComponent— acts when
    the child raises the event.
  In product-list.component.ts, define an onNotify() method, similar to the
    share() method.
  https://angular.io/start#pass-data-to-a-parent-component */
  // products = products;  // at first
  products = [...products];

  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert("You'll be notified when the product goes on sale");
  }
}
