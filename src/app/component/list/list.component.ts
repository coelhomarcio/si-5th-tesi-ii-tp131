import { Component }                       from "@angular/core";
import { FormControl, NgForm, Validators } from "@angular/forms";

import { DatabaseService } from "../../service/database.service";

@Component({
	selector:    "app-list",
	templateUrl: "./list.component.html"
})
export class ListComponent {
	public name = new FormControl("", [Validators.required]);
	public age = new FormControl("", [Validators.required, Validators.min(1)]);

	constructor(public databaseService: DatabaseService) {
	}

	// public validateName() {
	// 	if (this.name.hasError("required"))
	// 		return "Informe o seu nome";
	// 	return "";
	// }

	public validateAge() {
		if (this.age.hasError("required"))
			return "Informe a sua idade";
		else if (this.age.invalid)
			return "Idade deve ser maior que 0";
		return "";
	}

	public push(form: NgForm) {
		if (this.name.valid && this.age.valid) {
			this.databaseService.addListRef({
				name: this.name.value,
				age:  this.age.value
			});
			this.name.reset();
			this.age.reset();
			form.resetForm();
		}
	}

	public remove(key: string) {
		this.databaseService.removeListRef(key);
	}
}
