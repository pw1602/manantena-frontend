import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { ReversePipe } from 'src/app/pipes/reverse.pipe';

import { DatabaseService } from '../../services/database.service';
import { SiteOptionsService } from 'src/app/services/site-options.service';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
	PAGINATION_MAX_ITEMS = 5;
	SMALL_NEWSES_MAX_ITEMS = 3;

	private reversePipe = new ReversePipe();
	newsList = null;
	smallNewsList = null;

	constructor(
		public db: DatabaseService,
		public siteOptions: SiteOptionsService,
		@Inject(LOCALE_ID) private localeId: string
	) { }

	ngOnInit() {
		this.db.getNewses(this.localeId).subscribe(newses => this.newsList = newses.slice(newses.length - this.PAGINATION_MAX_ITEMS, newses.length));
		this.db.getSmallNewses(this.localeId).subscribe(smallNewses => this.smallNewsList = smallNewses.slice(smallNewses.length - this.SMALL_NEWSES_MAX_ITEMS, smallNewses.length));
	}

	paginate(event) {
		this.db.getNewses(this.localeId).subscribe(newses => this.newsList = this.reversePipe.transform(newses).slice(event.page * this.PAGINATION_MAX_ITEMS, (event.page + 1) * this.PAGINATION_MAX_ITEMS));
	}

	getPageLinkSize(): number {
		return Math.ceil(this.db.getNewsesLength() / this.PAGINATION_MAX_ITEMS);
	}

	isNew(date: number): boolean {
		return date + (3 * 60 * 60 * 1000) > Date.now();
	}
}
