import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SiteOptionsService {
	hints = true;
	smallNewses = true;
	languageSelect = true;
	timer = false;

	constructor() {}

	Hints(): boolean {
		return this.hints;
	}

	SmallNewses(): boolean {
		return this.hints;
	}

	LanguageSelect(): boolean {
		return this.hints;
	}
}
