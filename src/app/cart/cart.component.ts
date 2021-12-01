import { Component } from "@angular/core";
import { products, cart } from "../data";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent {
  products = products;
  cart = cart;

  deleteCartItem(index) {
    cart.quantity -= products[index].cart.quantity;
    cart.totalPrice -= products[index].price * products[index].cart.quantity;
    products[index].cart.quantity = 0;
  }

  goToLink() {
    var link =
      "https://api.whatsapp.com/send?phone=5571996344481&text=" +
      "Shopping%20Cart%3A%20%0D%0D";
    // space = "%20"
    // , = "%2C"
    // BREAK ROW = %0D
    // : = %3A
    // $ = %24
    for (let i = 0; i < products.length; i++) {
      if (products[i].cart.quantity > 0) {
        for (let j = 0; j < products[i].name.length; j++) {
          if (products[i].name[j] == " ") {
            link += "%20";
          } else {
            link += products[i].name[j];
          }
        }

        link += "%20%2C%20Quantity%3A%20" + products[i].cart.quantity + "%0D";
      }
    }
    link += "%0D";

    link += "Total%20%3A%20%24" + cart.totalPrice;

    window.open(link, "_blank");
  }
}
