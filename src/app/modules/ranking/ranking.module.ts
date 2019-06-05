import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { RankingAchievementsComponent } from './achievements/ranking-achievements.component';
import { RankingGuildsComponent } from './guilds/ranking-guilds.component';
import { RankingQuestsComponent } from './quests/ranking-quests.component';
import { RankingTopComponent } from './top/ranking-top.component';

@NgModule({
	declarations: [
		RankingAchievementsComponent,
		RankingGuildsComponent,
		RankingQuestsComponent,
		RankingTopComponent
	],
	imports: [
		CommonModule,
		RankingRoutingModule
	]
})
export class RankingModule { }
