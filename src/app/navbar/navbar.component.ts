import { Component } from "@angular/core";
import {
  cart,
  products,
  productsSearched,
  currentRoute,
  mobileSidebar
} from "../data";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
  cart = cart;
  currentRoute = currentRoute;
  products = products;
  productsSearched = productsSearched;
  mobileSidebar = mobileSidebar;

  showSideBar() {
    mobileSidebar.show = !mobileSidebar.show;
  }

  setCurrentRoute(link) {
    currentRoute.name = link;
    if (mobileSidebar.show) {
      mobileSidebar.show = false;
    }
  }

  searchProduct(text) {
    const temporaryProductsSearched = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].name.toLowerCase().includes(text.toLowerCase())) {
        if (text !== "") {
          temporaryProductsSearched.push(products[i]);
          console.log(products[i].name);
        }
      }
    }
    productsSearched.products = temporaryProductsSearched;
    productsSearched.inputValue = text;

    if (currentRoute.name === "/search") {
      this.setCurrentRoute("/secondsearch");
    } else {
      this.setCurrentRoute("/search");
    }
  }

  getRoterLink() {
    if (currentRoute.name === "/search") {
      return ["/secondsearch"];
    } else {
      return ["/search"];
    }
  }
}
