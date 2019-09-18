import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PlayerService } from '@shared/services/';
import { Player } from '@/core/classes';

@Component({
	selector: 'app-right-panel',
	templateUrl: './right-panel.component.html',
	styleUrls: ['./right-panel.component.scss']
})
export class RightpanelComponent implements OnInit {
	constructor(
		private playerService: PlayerService
	) { }

	ngOnInit() {
	}

	online$: Observable<Player[]> = this.playerService.getOnlinePlayers();
}
