import { Component } from "@angular/core";
import { products, product } from "../data";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  products = products;
  product = product;

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

  scrollUp() {
    window.scroll(0, 0);
  }
}
