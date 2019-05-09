import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Player, PlayerOnline } from '../classes/player';
import { PLAYERS, PLAYERS_ONLINE } from '../mocks/player-mock';

@Injectable({
	providedIn: 'root'
})
export class PlayerService {
	private apiUrl = 'http://localhost:8080/api';

	constructor(private http: HttpClient) { }

	/*getPlayers(): Observable<Player[]> {
		return of(PLAYERS);
	}

	findPlayerById(id): Observable<Player> {
		return of(PLAYERS.find(player => player.id === id));
	}*/

	/*findPlayerByName(name): Observable<Player> {
		return this.http.get<Player>(this.apiUrl + '/player/' + name);
	}*/

	getPlayersCountInDatabase(): number {
		return PLAYERS.length;
	}

	findPlayerByName(name): Observable<Player> {
		return of(PLAYERS.find(player => player.name.toLocaleLowerCase() == name.toLocaleLowerCase()));
	}

	getOnlinePlayers(): Observable<PlayerOnline[]> {
		return of(PLAYERS_ONLINE);
	}
}
