import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
	NewsComponent,
	RegisterComponent,
	RecoverComponent,
	PlayerInfoComponent
} from '@core/components';

import { ForumComponent } from './modules/forum/forum.component';
import { PlayerInfoResolverService } from '@shared/services';

const routes: Routes = [
	// { path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'forum', component: ForumComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'recover', component: RecoverComponent },
	{ path: 'player', children: [
		{ path: '', redirectTo: '/', pathMatch: 'full'},
		{ path: ':name', component: PlayerInfoComponent, resolve: { player: PlayerInfoResolverService } }
	]},
	{ path: '', component: NewsComponent },
	{ path: '**', redirectTo: '/' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [PlayerInfoResolverService]
})
export class AppRoutingModule { }
