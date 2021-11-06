import { Component, Input } from "@angular/core";

import { AuthService } from "../../service/auth.service";

@Component({
	selector:    "app-header",
	templateUrl: "./header.component.html"
})
export class HeaderComponent {
	@Input() public title!: String;

	constructor(public authService: AuthService) {}
}
