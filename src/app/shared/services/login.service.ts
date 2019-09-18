import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	constructor() { }

	isLoggedIn(): boolean {
		if (this.getToken() != null && this.getTokenTime() > (new Date().getTime() / 1000)) {
			return true;
		}

		return false;
	}

	getToken(): string {
		return localStorage.getItem('token');
	}

	getTokenTime(): number {
		return parseInt(localStorage.getItem('token_expired_at'), 10);
	}

	login(token: string, time: string) {
		localStorage.setItem('token', token);
		localStorage.setItem('token_expired_at', (parseInt(time, 10) / 1000).toString());
	}

	logout() {
		localStorage.removeItem('token');
		localStorage.removeItem('token_expired_at');
	}
}
