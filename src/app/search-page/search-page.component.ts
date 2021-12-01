import { Component } from "@angular/core";
import { cart, currentRoute, productsSearched } from "../data";

@Component({
  selector: "search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.scss"]
})
export class SearchPageComponent {
  cart = cart;
  currentRoute = currentRoute;
  products = productsSearched.products;
  inputValue = productsSearched.inputValue;

  setCurrentRoute(link) {
    currentRoute.name = link;
  }
}
