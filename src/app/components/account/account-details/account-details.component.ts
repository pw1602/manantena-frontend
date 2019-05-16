import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { DatabaseService } from '@/services/database.service';

import { Account } from '@/classes/account';
import { Player } from '@/classes/player';

@Component({
	selector: 'app-account-details',
	templateUrl: './account-details.component.html',
	styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
	constructor(
		public db: DatabaseService
	) { }

	ngOnInit() {
	}

	account$: Observable<Account> = this.db.getAccount(localStorage.getItem('token')).pipe(shareReplay());
	characters$: Observable<Player[]> = this.db.getAccountCharacters(localStorage.getItem('token')).pipe(shareReplay());
}
