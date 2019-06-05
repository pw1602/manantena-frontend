import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { DatabaseService } from '@shared/services/database.service';

import { Account } from '@/core/classes/account';
import { Player } from '@/core/classes/player';

@Component({
	selector: 'app-account-details',
	templateUrl: './account-details.component.html',
	styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
	account$: Observable<Account> = this.db.getAccount(localStorage.getItem('token')).pipe(shareReplay());
	characters$: Observable<Player[]> = this.db.getAccountCharacters(localStorage.getItem('token')).pipe(shareReplay());

	constructor(
		public db: DatabaseService
	) { }

	ngOnInit() {
	}
}
