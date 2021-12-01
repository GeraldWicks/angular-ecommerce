import { Component } from "@angular/core";

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.scss"]
})
export class ContactPageComponent {
  goToLink(text) {
    const space = "%20";
    const comma = "%2C";
    const breakRow = "%0D";
    const column = "%3A";
    const dolar = "%24";
    const question = "%3F";
    var link =
      "https://api.whatsapp.com/send?phone=5571996344481&text=" +
      breakRow +
      breakRow;

    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        link += space;
      } else if (text[i] === ",") {
        link += comma;
      } else if (text[i] === ":") {
        link += column;
      } else if (text[i] === "$") {
        link += dolar;
      } else if (text[i] === "?") {
        link += question;
      } else {
        link += text[i];
      }
    }

    window.open(link, "_blank");
  }
}
