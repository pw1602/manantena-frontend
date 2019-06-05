import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take, catchError } from 'rxjs/operators';

import { PlayerService } from '@shared/services/player.service';
import { Player } from '@/core/classes/player';

@Injectable({
	providedIn: 'root'
})
export class PlayerInfoResolverService implements Resolve<Player> {
	constructor(
		private playerService: PlayerService,
		private router: Router
	) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Player> | Observable<never> {
		const name = route.paramMap.get('name');

		return this.playerService.findPlayerByName(name).pipe(
			catchError(err => {
				return EMPTY;
			}),
			take(1),
			mergeMap(player => {
				if (player) {
					return of(player);
				} else {
					return EMPTY;
				}
			})
		);
	}
}
