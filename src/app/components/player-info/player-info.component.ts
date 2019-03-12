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
	player: Player;

	constructor(public playerService: PlayerService, private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe(param => {
			if (param['name']) {
				this.playerService.findPlayerByName(param['name']).subscribe(data => {
					this.player = data;

					if (this.player) {
						this.player.deaths = JSON.parse("[" + this.player.deaths + "]");
						this.player.outfit = `http://outfit-images.ots.me/animatedOutfits1090/animoutfit.php?id=${this.player.looktype}&addons=${this.player.lookaddons}&head=${this.player.lookhead}&body=${this.player.lookbody}&legs=${this.player.looklegs}&feet=${this.player.lookfeet}&mount=0&direction=3`;
					}
				});
			}
		});
	}

	getBarStyle(type?: string) {
		const health = (this.player.health / this.player.healthmax) * 100 || 100;
		const mana = (this.player.mana / this.player.manamax) * 100 || 100;
		const stamina = (this.player.stamina / 2520) * 100 || 100;
		const exp = (this.player.experience / this.getNextLevelExperience(this.player.level + 1)) * 100 || 100;

		let value = 0;
		let color = 'white';
		if (type == 'hp') {
			value = health;
		} else if (type == 'mp') {
			value = mana;
		} else if (type == 'stamina') {
			value = stamina;
		} else if (type == 'exp') {
			value = exp;
		}

		let styles = {
			'width': value + '%',
			'aria-valuenow': value + '%',
			'aria-valuemin': 0,
			'aria-valuemax': 100,
			'font-weight': 'bold'
		}

		return styles;
	}

	getStaminaTime(): string {
		return Math.floor(this.player.stamina / 60) + ":" + this.player.stamina % 60;
	}

	getTime(value): string {
		return new Date(value).toLocaleString();
	}

	getNextLevelExperience(level: number): number {
		return ((50 * Math.pow(level, 3)) / 3) - (100 * Math.pow(level, 2)) + (850 * level / 3) - 200;
	}
}
