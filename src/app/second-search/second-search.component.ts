import { Component } from "@angular/core";
import { cart, currentRoute, productsSearched } from "../data";

@Component({
  selector: "search-page",
  templateUrl: "./second-search.component.html",
  styleUrls: ["./second-search.component.scss"]
})
export class SecondSearchComponent {
  cart = cart;
  currentRoute = currentRoute;
  products = productsSearched.products;
  inputValue = productsSearched.inputValue;

  setCurrentRoute(link) {
    currentRoute.name = link;
  }
}
