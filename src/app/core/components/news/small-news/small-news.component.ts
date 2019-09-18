import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-small-news',
	templateUrl: './small-news.component.html',
	styleUrls: ['./small-news.component.scss']
})
export class SmallNewsComponent implements OnInit {
	constructor() { }

	@Input() newses: Object;
	@Input() showMax: Number;

	ngOnInit() {
	}

	isNew(date: number): boolean {
		return date + (3 * 60 * 60 * 1000) > Date.now();
	}
}
