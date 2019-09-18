import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './core/components/news/news.component';
import { PlayerInfoComponent } from './core/components/player-info/player-info.component';
import { RegisterComponent } from './core/components/register/register.component';
import { RecoverComponent } from './core/components/recover/recover.component';
import { ForumComponent } from './modules/forum/forum.component';
import { PlayerInfoResolverService } from '@shared/services/player-info-resolver.service';

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
