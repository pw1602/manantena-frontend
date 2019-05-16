import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, filter } from 'rxjs/operators';

import { DatabaseService } from '@/services/database.service';
import { SiteOptionsService } from '@/services/site-options.service';

import { News, SmallNews } from '@/classes/news';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
	PAGINATION_MAX_ITEMS = 5;
	SMALL_NEWSES_MAX_ITEMS = 3;

	constructor(
		public db: DatabaseService,
		public siteOptions: SiteOptionsService,
		@Inject(LOCALE_ID) private localeId: string
	) { }

	ngOnInit() {
	}

	newses$: Observable<News[]> = this.db.getNewses(this.localeId).pipe(shareReplay());
	smallNewses$: Observable<SmallNews[]> = this.db.getSmallNewses(this.localeId).pipe(shareReplay());

	/*paginate(event) { // !FIXME Znalezc sposob na paginacje
		this.db.getNewses(this.localeId).subscribe(newses => this.newsList = this.reversePipe.transform(newses).slice(event.page * this.PAGINATION_MAX_ITEMS, (event.page + 1) * this.PAGINATION_MAX_ITEMS));
	}*/

	getPageLinkSize(size: number): number {
		return Math.ceil(size / this.PAGINATION_MAX_ITEMS);
	}

	isNew(date: number): boolean {
		return date + (3 * 60 * 60 * 1000) > Date.now();
	}
}
