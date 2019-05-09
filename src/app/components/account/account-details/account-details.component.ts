import { Component, OnInit } from '@angular/core';

import { DatabaseService } from 'src/app/services/database.service';
import { Account } from '../../../classes/account';

@Component({
	selector: 'app-account-details',
	templateUrl: './account-details.component.html',
	styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
	creationDate = Date.now();
	account: Account;

	constructor(
		public db: DatabaseService
	) { }

	ngOnInit() {
		this.db.getAccount(localStorage.getItem('token')).subscribe(account => this.account = account);
	}
}
