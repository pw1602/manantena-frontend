import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Player } from '../../classes/player';
import { PlayerService } from '../../services/player.service';

@Component({
	selector: 'app-player-info',
	templateUrl: './player-info.component.html',
	styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit {
	private player = new Player();

	constructor(private playerService: PlayerService, private activatedRoute: ActivatedRoute) {
	}

	ngOnInit() {
		this.activatedRoute.params.subscribe(param => {
			if (param['name']) {
				this.playerService.findPlayerByName(param['name']).subscribe(player => this.player = player);
			}
		});
	}

}
