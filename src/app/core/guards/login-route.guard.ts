import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlSegment, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from '@shared/services/login.service';

@Injectable({
	providedIn: 'root'
})
export class LoginRouteGuard implements CanActivate {
	constructor(
		private router: Router,
		private loginService: LoginService
	) {}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		if (this.loginService.isLoggedIn()) {
			return true;
		}
		
		this.router.navigate(['/']);
		return false;
	}

	canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
		if (this.loginService.isLoggedIn()) {
			return true;
		}

		return false;
	}
}
