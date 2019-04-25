import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';

import { englishHints, polishHints } from '../../mocks/hints-mock';
import { SiteOptionsService } from 'src/app/services/site-options.service';

@Component({
	selector: 'app-hints',
	templateUrl: './hints.component.html',
	styleUrls: ['./hints.component.scss']
})
export class HintsComponent implements OnInit {
	hint: string;

	constructor(
		@Inject(LOCALE_ID) private localeId: string,
		public siteOptions: SiteOptionsService
	) {
	}

	ngOnInit() {
		let random = this.getRandomInt(0, englishHints.length);
		switch(this.localeId) {
			case 'eng':
				this.hint = englishHints[random];
				break;
			case 'pl':
				this.hint = polishHints[random];
				break;
			default:
				this.hint = englishHints[random];
		}
		console.log(random);
	}

	private getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}
}
