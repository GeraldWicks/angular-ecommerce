import { Component } from "@angular/core";
import { products, product, cart } from "../data";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.scss"]
})
export class ProductPageComponent {
  products = products;
  product = product;
  cart = cart;

  addToCart(index) {
    products[index].cart.quantity += 1;
    cart.quantity += 1;
    cart.totalPrice += products[index].price;
  }

  setProductClicked(props) {
    product.index = props;
    product.id = products[props].id;
    product.name = products[props].name;
    product.price = products[props].price;
    product.description = products[props].description;
    product.type = products[props].type;
    product.imgUrl = products[props].imgUrl;
    const randomNumber = this.getRandomNumberBetween(0, 5);
    product.firstProduct = 4 * randomNumber;
    window.scroll(0, 0);
  }

  getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
