import { Injectable }                           from "@angular/core";
import { Router }                               from "@angular/router";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/compat/database";

import { Observable } from "rxjs";
import { map }        from "rxjs/operators";

import { AuthService } from "./auth.service";

@Injectable({
	providedIn: "root"
})
export class DatabaseService {
	private readonly _list: Observable<any[]>;
	private listRef: AngularFireList<any>;

	constructor(private router: Router, private database: AngularFireDatabase, private authService: AuthService) {
		this.listRef = database.list("list");
		this._list = this.listRef.snapshotChanges().pipe(
			map(changes => changes.map(change => ({ key: change.payload.key, ...change.payload.val() })))
		);
	}

	public get list(): Observable<any[]> {
		if (!this.authService.authenticated)
			this.router.navigate(["/home"]).then();
		return this._list;
	}

	public addListRef(value: any) {
		if (this.authService.authenticated)
			this.listRef.push(value);
	}

	public removeListRef(key: string) {
		if (this.authService.authenticated)
			this.listRef.remove(key).then();
	}
}
