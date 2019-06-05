import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRouteGuard } from '@/core/guards/login-route.guard';
import { AccountDetailsComponent } from './dashboard/account-details.component';
import { AccountRefferalsComponent } from './refferals/account-refferals.component';

const routes: Routes = [
	{ path: 'account', canActivate: [LoginRouteGuard], canLoad: [LoginRouteGuard], children: [
		{ path: '', redirectTo: 'details', pathMatch: 'full' },
		{ path: 'details', component: AccountDetailsComponent },
		{ path: 'refferals', component: AccountRefferalsComponent }
	]},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AccountRoutingModule { }
