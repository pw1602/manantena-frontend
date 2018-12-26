import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './components/news/news.component';
import { OnlineComponent } from './components/online/online.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { LoginRouteGuard } from './guards/login-route.guard';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: '', component: NewsComponent },
	{ path: 'online', component: OnlineComponent },
	{ path: 'player', component: PlayerInfoComponent, },
	{ path: 'account', canActivate: [LoginRouteGuard], children: [
		{ path: '', redirectTo: 'details', pathMatch: 'full' },
		{ path: 'details', component: AccountDetailsComponent },
		{ path: 'create_character', component: CreateCharacterComponent },
		/*{ path: 'refferals' }*/
	]}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
