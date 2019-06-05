import { Component, OnInit } from '@angular/core';

import { PlayerService } from '@shared/services/player.service';
import { Player } from '@/core/classes/player';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
	selector: 'app-community-online',
	templateUrl: './community-online.component.html',
	styleUrls: ['./community-online.component.scss']
})
export class CommunityOnlineComponent implements OnInit {
	playersOnline$: Observable<Player[]> = this.playerService.getOnlinePlayers().pipe(shareReplay());

	constructor(
		public playerService: PlayerService
	) { }

	ngOnInit() {
	}

	getOutfit(player: Player) {
		return `http://outfit-images.ots.me/animatedOutfits1090/animoutfit.php?id=${player.looktype}&addons=${player.lookaddons}&head=${player.lookhead}&body=${player.lookbody}&legs=${player.looklegs}&feet=${player.lookfeet}&mount=0&direction=3`;
	}
}
