import { Component, EventEmitter, Input, Output } from "@angular/core";
import { products, product, cart } from "../../data";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  cart = cart;
  product = product;

  @Input() product!: products;
  @Input() index: index;
  @Output() notify = new EventEmitter();
  constructor() {}

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

  ngOnInit() {}
}
