import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from "./components/app/app.component";
import {TopBarComponent} from "./components/top-bar/top-bar.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductAlertsComponent} from "./components/product-alerts/product-alerts.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {CartComponent} from './components/cart/cart.component';
import {HttpClientModule} from "@angular/common/http";
import {ShippingComponent} from './components/shipping/shipping.component';

/* 7. The generator automatically added the ProductAlertsComponent
  to the AppModule
  to make it available to other components in the application.
https://angular.io/start#pass-data-to-a-child-component
*/

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: "", component: ProductListComponent},
      {path: "products/:productId", component: ProductDetailsComponent},
      {path: "cart", component: CartComponent},
      {path: "shipping", component: ShippingComponent},
    ]),
    // BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
