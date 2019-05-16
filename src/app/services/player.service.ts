import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Player } from '../classes/player';
import { Global } from '@/classes/global';

@Injectable({
	providedIn: 'root'
})
export class PlayerService {
	constructor(private http: HttpClient) { }

	getPlayers(): Observable<Player[]> {
		return this.http.get<Player[]>(Global.API_ENDPOINT + '/player', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
	}

	findPlayerById(id: number): Observable<Player> {
		return this.http.get<Player>(Global.API_ENDPOINT + '/player/' + id);
	}

	findPlayerByName(name: string): Observable<Player> {
		return this.http.get<Player>(Global.API_ENDPOINT + '/player/' + name);
	}

	getOnlinePlayers(): Observable<Player[]> {
		return this.http.get<Player[]>(Global.API_ENDPOINT + '/player/online');
	}
}
