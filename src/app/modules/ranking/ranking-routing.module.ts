import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankingTopComponent } from './top/ranking-top.component';
import { RankingQuestsComponent } from './quests/ranking-quests.component';
import { RankingAchievementsComponent } from './achievements/ranking-achievements.component';
import { RankingGuildsComponent } from './guilds/ranking-guilds.component';

const routes: Routes = [
	{ path: 'ranking', children: [
		{ path: '', redirectTo: '/', pathMatch: 'full' },
		{ path: 'top', component: RankingTopComponent },
		{ path: 'quests', component: RankingQuestsComponent },
		{ path: 'achievements', component: RankingAchievementsComponent },
		{ path: 'guilds', component: RankingGuildsComponent }
	]},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RankingRoutingModule { }
