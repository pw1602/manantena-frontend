import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { News, SmallNews } from '@/classes/news';
import { Guild } from '@/classes/guild';
import { Account } from '@/classes/account';
import { Global } from '@/classes/global';
import { Player } from '@/classes/player';

import { Permissions } from '@/classes/permissions';

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {

	constructor(
		private http: HttpClient
	) { }

	getNewses(lang: string = "en"): Observable<News[]> {
		return this.http.get<News[]>(Global.API_ENDPOINT + '/news/' + lang);
	}

	getSmallNewses(lang: string = "en"): Observable<SmallNews[]> {
		return this.http.get<SmallNews[]>(Global.API_ENDPOINT + '/small_news/' + lang);
	}

	getGuilds(): Observable<Guild[]> {
		return this.http.get<Guild[]>(Global.API_ENDPOINT + '/guild');
	}

	getAccount(email: string): Observable<Account> {
		return this.http.get<Account>(Global.API_ENDPOINT + '/account/' + email);
	}

	getAccountCharacters(value): Observable<Player[]> {
		return this.http.get<Player[]>(Global.API_ENDPOINT + '/account/' + value + '/characters');
	}

	getPermissions(accountId: number): Observable<Permissions> {
		return this.http.get<Permissions>(Global.API_ENDPOINT + '/account/' + accountId + '/permissions');
	}
}
