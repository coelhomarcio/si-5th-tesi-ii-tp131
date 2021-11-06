import { NgModule }                         from "@angular/core";
import { BrowserModule }                    from "@angular/platform-browser";
import { BrowserAnimationsModule }          from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule }                from "@angular/fire/compat";
import { AngularFireAuthModule }            from "@angular/fire/compat/auth";
import { AngularFireDatabaseModule }        from "@angular/fire/compat/database";

import { MatIconModule }      from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule }     from "@angular/material/input";
import { MatButtonModule }    from "@angular/material/button";
import { MatDividerModule }   from "@angular/material/divider";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent }      from "./app.component";
import { HeaderComponent }   from "./component/header/header.component";
import { FooterComponent }   from "./component/footer/footer.component";
import { HomeComponent }     from "./component/home/home.component";
import { ListComponent }     from "./component/list/list.component";
import { LoginComponent }    from "./component/login/login.component";
import { LogoutComponent }   from "./component/logout/logout.component";
import { NotFoundComponent } from "./component/not-found/not-found.component";

import { LoginActivateGuard }  from "./guard/login-activate.guard";
import { LogoutActivateGuard } from "./guard/logout-activate.guard";

const firebaseConfig = {
	apiKey:            "AIzaSyCr8SE_46FSgP_VsfFxFejy1gUZAIwKQuI",
	authDomain:        "si-5th-tesi-ii-tp121.firebaseapp.com",
	projectId:         "si-5th-tesi-ii-tp121",
	storageBucket:     "si-5th-tesi-ii-tp121.appspot.com",
	messagingSenderId: "77959390699",
	appId:             "1:77959390699:web:5e66fa07cf679dbe9ae5ae"
};

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		ListComponent,
		LoginComponent,
		LogoutComponent,
		NotFoundComponent
	],
	imports:      [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireAuthModule,
		AngularFireDatabaseModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatDividerModule,
		AppRoutingModule
	],
	providers:    [LoginActivateGuard, LogoutActivateGuard],
	bootstrap:    [AppComponent]
})
export class AppModule {
}
