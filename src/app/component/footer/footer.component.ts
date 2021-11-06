import { Component, Input } from "@angular/core";

import { Footer } from "../../interface/footer";

@Component({
	selector:    "app-footer",
	templateUrl: "./footer.component.html"
})
export class FooterComponent {
	@Input() public footer!: Footer;
}
