import { Component } from "@angular/core";
import { products, productSubpage } from "../data";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent {
  products = products;
  productSubpage = productSubpage;

  onNotify() {
    window.alert("You will be notified !");
  }

  changeSubpage(props) {
    productSubpage.name = props;
    productSubpage.page = 1;

    if (productSubpage.name === "Shoes") {
      productSubpage.firstPage = 12;
      productSubpage.lastPage = 20;
    }
    if (
      productSubpage.name === "All Products" ||
      productSubpage.name === "T-Shirts"
    ) {
      productSubpage.firstPage = 0;
      productSubpage.lastPage = 8;
    }
  }

  changePagination(props) {
    window.scroll(0, 0);
    productSubpage.page = props;

    productSubpage.firstPage = 8 * (productSubpage.page - 1);
    productSubpage.lastPage = 8 * productSubpage.page;

    if (productSubpage.name === "Shoes") {
      productSubpage.firstPage += 12;
      productSubpage.lastPage += 12;
    }
  }
}
