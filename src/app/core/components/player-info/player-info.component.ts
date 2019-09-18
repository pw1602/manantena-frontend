import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Player } from '@/core/classes';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'app-player-info',
	templateUrl: './player-info.component.html',
	styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit {
	player: Player;

	constructor(
		private route: ActivatedRoute,
		private messageService: MessageService
	) {}

	ngOnInit() {
		this.route.data.subscribe((data: { player: Player }) => {
			if (!data.player || !data) {
				this.messageService.add({ severity: 'error', summary: 'Player searching', detail: `There is no player with that name!` });
				return;
			}

			this.player = data.player;
		});
	}

	getBarStyle(type?: string) {
		let value = 0;
		switch(type) {
			case 'hp': value = (this.player.health / this.player.healthmax) * 100 || 100; break;
			case 'mp': value = (this.player.mana / this.player.manamax) * 100 || 100; break;
			case 'stamina': value = (this.player.stamina / 2520) * 100 || 100; break;
			case 'exp': {
				const expForNextLevel = this.getNextLevelExperience(this.player.level);
				const expDiff = this.getExperienceForLevel(this.player.level + 1) - this.player.experience;
				value = (expDiff / expForNextLevel) * 100 || 100;
				break;
			}
			default: value = 0;
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

	getExperienceForLevel(level: number): number {
		return ((50 * Math.pow(level, 3)) / 3) - (100 * Math.pow(level, 2)) + (850 * level / 3) - 200;
	}

	getNextLevelExperience(level: number): number {
		return 50 * Math.pow(level, 2) - 150 * level + 200;
	}

	getOutfit() {
		return `http://outfit-images.ots.me/animatedOutfits1090/animoutfit.php?id=${this.player.looktype}&addons=${this.player.lookaddons}&head=${this.player.lookhead}&body=${this.player.lookbody}&legs=${this.player.looklegs}&feet=${this.player.lookfeet}&mount=0&direction=3`;
	}

	getVocation(): string {
		switch(this.player.vocation) {
			case 1: return 'Sorcerer';
			case 2: return 'Druid';
			case 3: return 'Paladin';
			case 4: return 'Knight';
			case 5: return 'Master Sorcerer';
			case 6: return 'Elder Druid';
			case 7: return 'Royal Paladin';
			case 8: return 'Elite Knight';
			default: return 'None';
		}
	}
}
