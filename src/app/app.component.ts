import { Component } from "@angular/core";

import { Footer } from "./interface/footer";

@Component({
	selector: "app-root",
	template: `
		          <app-header [title]="title"></app-header>
		          <router-outlet></router-outlet>
		          <app-footer [footer]="footer"></app-footer>
	          `
})
export class AppComponent {
	public readonly title: string = "Coelho Firebase";
	public readonly footer: Footer = {
		title:  "Desenvolvido por",
		name:   "Marcio Coelho",
		RA:     "RA 0050831921015",
		gitHub: {
			label: "GitHub",
			link:  "https://github.com/coelhomarcio",
			icon:  "launch"
		}
	};
}
