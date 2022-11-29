import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Product, products} from "../../products";
import {CartService} from "../../services/cart.service"

@Component({
    selector: "app-product-details",
    templateUrl: "./product-details.component.html",
    styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
    // 2. Define the product property.
    product: Product | undefined;

    // 3. Inject ActivatedRoute into the constructor() by adding private route:
    // ActivatedRoute as an argument within the constructor's parentheses.
    constructor(
        private route: ActivatedRoute,
        private cartService: CartService
    ) {
    }

    // 4. In the ngOnInit() method, extract the productId from the route
    // parameters and find the corresponding product in the products array.
    ngOnInit() {
        // First get the product id from the current route.
        const routeParams = this.route.snapshot.paramMap;
        const productIdFromRoute = Number(routeParams.get("productId"));

        // Find the product that correspond with the id provided in route.
        this.product = products.find(
            (product) => product.id === productIdFromRoute
        );
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
        window.alert("Your product has been added to the cart!");
    }

}
