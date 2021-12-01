import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CartComponent } from "./cart/cart.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductPageComponent } from "./product-page/product-page.component";
import { ProductComponent } from "./product-list/product/product.component";
import { SearchPageComponent } from "./search-page/search-page.component";
import { SecondSearchComponent } from "./second-search/second-search.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "products", component: ProductListComponent },
      { path: "product", component: ProductPageComponent },
      { path: "cart", component: CartComponent },
      { path: "contact", component: ContactPageComponent },
      { path: "search", component: SearchPageComponent },
      { path: "secondsearch", component: SecondSearchComponent }
    ])
  ],
  declarations: [
    AppComponent,
    CartComponent,
    ContactPageComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ProductListComponent,
    ProductPageComponent,
    ProductComponent,
    SearchPageComponent,
    SecondSearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
