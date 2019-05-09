import { Component, OnInit } from '@angular/core';

import { PlayerService } from 'src/app/services/player.service';
import { PlayerOnline } from 'src/app/classes/player';

@Component({
	selector: 'app-community-online',
	templateUrl: './community-online.component.html',
	styleUrls: ['./community-online.component.scss']
})
export class CommunityOnlineComponent implements OnInit {
	playersOnline: PlayerOnline[];

	constructor(
		public playerService: PlayerService
	) { }

	ngOnInit() {
		this.playerService.getOnlinePlayers().subscribe(players => this.playersOnline = players);
	}
}
