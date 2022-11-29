/* 4. To set up ProductAlertsComponent to receive product data,
  first import Input from @angular/core. */

/* 1. In product-alerts.component.ts, import Output and EventEmitter
https://angular.io/start#pass-data-to-a-parent-component */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../../products";

/* 3. Open product-alerts.component.ts.
  The @Component() decorator indicates that the following class is a component.
  @Component() also provides metadata about the component,
    including its selector, templates, and styles.

    https://angular.io/start#pass-data-to-a-child-component */
@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"],
})
/* 5. In the ProductAlertsComponent class definition,
  define a property named product with an @Input() decorator.
  The @Input() decorator indicates that the property value passes in from
    the component's parent, ProductListComponent. */
export class ProductAlertsComponent {
  @Input() product!: Product | undefined;
  @Output() notify = new EventEmitter();
}
