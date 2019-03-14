import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { News, SmallNews } from '../classes/news';

import { NEWS_LIST_EN, NEWS_LIST_PL, SMALL_NEWS_LIST_EN, SMALL_NEWS_LIST_PL } from '../mocks/news-mock';

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {

	constructor(
		private http: HttpClient
	) { }

	getNewses(lang: string = "en"): Observable<News[]> {
		return lang === "pl" ? of(NEWS_LIST_PL) : of(NEWS_LIST_EN);
	}

	getSmallNewses(lang: string = "en"): Observable<SmallNews[]> {
		return lang === "pl" ? of(SMALL_NEWS_LIST_PL) : of(SMALL_NEWS_LIST_EN);
	}

	getNewsesLength(): number {
		return NEWS_LIST_EN.length;
	}
}
