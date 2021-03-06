import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { DatabaseService } from '@shared/services/database.service';
import { LoginService } from '@shared/services/login.service';
import { Account, Permissions } from '@/core/classes';

@Injectable({
	providedIn: 'root'
})
export class PermissionService {
	account: Account;
	permissions: Permissions;

	constructor(
		private http: HttpClient,
		private db: DatabaseService,
		private loginService: LoginService
	) {
		this.db.getAccount(this.loginService.getToken()).subscribe(acc => {
			this.db.getPermissions(acc.id).subscribe(perm => {
				this.permissions = perm;
			});
		});
	}

	private updatePermissions() {
		this.db.getAccount(this.loginService.getToken()).subscribe(acc => {
			this.db.getPermissions(acc.id).subscribe(perm => {
				this.permissions = perm;
			});
		});
	}

	hasPermission(permission: string): boolean {
		this.updatePermissions();
		return this.permissions ? this.permissions.flags[permission] : false;
	}
}
