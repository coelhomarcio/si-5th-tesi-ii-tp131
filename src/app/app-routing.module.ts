import { NgModule }             from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent }     from "./component/home/home.component";
import { ListComponent }     from "./component/list/list.component";
import { LoginComponent }    from "./component/login/login.component";
import { LogoutComponent }   from "./component/logout/logout.component";
import { NotFoundComponent } from "./component/not-found/not-found.component";

import { LoginActivateGuard }  from "./guard/login-activate.guard";
import { LogoutActivateGuard } from "./guard/logout-activate.guard";

const routes: Routes = [
	{ path: "home", component: HomeComponent },
	{ path: "list", component: ListComponent, canActivate: [LoginActivateGuard] },
	{ path: "login", component: LoginComponent, canActivate: [LogoutActivateGuard] },
	{ path: "logout", component: LogoutComponent, canActivate: [LoginActivateGuard] },
	{ path: "", redirectTo: "/home", pathMatch: "full" },
	{ path: "**", component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
