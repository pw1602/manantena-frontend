import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { News, SmallNews } from '../classes/news';

import { NEWS_LIST, SMALL_NEWS_LIST } from '../mocks/news-mock';

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {

	constructor(
		private http: HttpClient
	) { }

	getNewses(): Observable<News[]> {
		return of(NEWS_LIST);
	}

	getSmallNewses(): Observable<SmallNews[]> {
		return of(SMALL_NEWS_LIST);
	}

	getNewsesLength(): number {
		return NEWS_LIST.length;
	}
}
