import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-big-news',
	templateUrl: './big-news.component.html',
	styleUrls: ['./big-news.component.scss']
})
export class BigNewsComponent implements OnInit {
	constructor() { }

	@Input() newses: Object;

	ngOnInit() {
	}

	isNew(date: number): boolean {
		return date + (3 * 60 * 60 * 1000) > Date.now();
	}
}
