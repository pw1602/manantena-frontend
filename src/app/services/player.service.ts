import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Player } from '../classes/player';
import { PLAYERS } from '../mocks/player-mock';

@Injectable({
	providedIn: 'root'
})
export class PlayerService {
	constructor() { }

	getPlayers(): Observable<Player[]> {
		return of(PLAYERS);
	}

	findPlayerById(id): Observable<Player> {
		return of(PLAYERS.find(player => player.id === id));
	}

	findPlayerByName(name): Observable<Player> {
		return of(PLAYERS.find(player => player.name === name));
	}
}
