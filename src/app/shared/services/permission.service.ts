import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { DatabaseService } from './database.service';
import { LoginService } from './login.service';

import { Account } from '@/core/classes/account';
import { Permissions } from '@/core/classes/permissions';

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
		return this.permissions.flags[permission];
	}
}
