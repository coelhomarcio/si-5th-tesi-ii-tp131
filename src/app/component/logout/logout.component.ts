import { Component } from "@angular/core";
import { Router }    from "@angular/router";

import { AuthService } from "../../service/auth.service";

@Component({
	selector:    "app-logout",
	templateUrl: "./logout.component.html"
})
export class LogoutComponent {
	constructor(private router: Router, public authService: AuthService) {
	}

	public logout() {
		if (this.authService.authenticated)
			this.authService.logout();
		else
			this.router.navigate(["/home"]).then();
	}
}
