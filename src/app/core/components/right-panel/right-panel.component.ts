import { Component, OnInit } from '@angular/core';
import { PlayerService } from '@shared/services/player.service';
import { Observable } from 'rxjs';
import { Player } from '@/core/classes/player';

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