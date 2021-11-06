import { Component }               from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router }                  from "@angular/router";

import { AuthService } from "../../service/auth.service";

@Component({
	selector:    "app-login",
	templateUrl: "./login.component.html"
})
export class LoginComponent {
	// private passwordPattern: RegExp = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)).{8}$/gm;
	public email = new FormControl("", [
		Validators.required, Validators.email
	]);
	public password = new FormControl("", [
		Validators.required, Validators.minLength(8), Validators.maxLength(8)
	]);

	constructor(private router: Router, public authService: AuthService) {
	}

	public validateEmail() {
		if (this.email.hasError("required"))
			return "Campo obrigatório";
		else if (this.email.hasError("email"))
			return "E-mail inválido";
		return "";
	}

	public validatePassword() {
		if (this.password.hasError("required"))
			return "Campo obrigatório";
		else if (this.password.invalid)
			return "Password inválido";
		return "";
	}

	public login(email: boolean) {
		if (email && !this.authService.authenticated) {
			if (this.email.valid && this.password.valid)
				this.authService.emailLogin(this.email.value, this.password.value);
		}
		else if (!this.authService.authenticated)
			this.authService.googleLogin();
		else
			this.router.navigate(["/home"]).then();
	}
}
