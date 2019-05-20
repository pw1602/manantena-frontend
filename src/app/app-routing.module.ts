import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './components/news/news.component';
import { CommunityOnlineComponent } from './components/community/community-online/community-online.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { LoginRouteGuard } from './guards/login-route.guard';
import { AccountDetailsComponent } from './components/account/account-details/account-details.component';
import { CommunityGuildsComponent } from './components/community/community-guilds/community-guilds.component';
import { CommunityGalleryComponent } from './components/community/community-gallery/community-gallery.component';
import { CommunitySupportComponent } from './components/community/community-support/community-support.component';
import { LibraryRulesComponent } from './components/library/library-rules/library-rules.component';
import { LibraryFaqComponent } from './components/library/library-faq/library-faq.component';
import { LibraryServerInformationsComponent } from './components/library/library-server-informations/library-server-informations.component';
import { LibraryDownloadComponent } from './components/library/library-download/library-download.component';
import { LibraryAchievementsComponent } from './components/library/library-achievements/library-achievements.component';
import { RankingTopComponent } from './components/ranking/ranking-top/ranking-top.component';
import { RankingQuestsComponent } from './components/ranking/ranking-quests/ranking-quests.component';
import { RankingAchievementsComponent } from './components/ranking/ranking-achievements/ranking-achievements.component';
import { RankingGuildsComponent } from './components/ranking/ranking-guilds/ranking-guilds.component';
import { AccountRefferalsComponent } from './components/account/account-refferals/account-refferals.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoverComponent } from './components/recover/recover.component';
import { ForumComponent } from './components/forum/forum.component';
import { PlayerInfoResolverService } from './services/player-info-resolver.service';
import { MessageService } from 'primeng/api';

const routes: Routes = [
	//{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'forum', component: ForumComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'recover', component: RecoverComponent },
	{ path: 'community', children: [
		{ path: '', redirectTo: '/', pathMatch: 'full' },
		{ path: 'online', component: CommunityOnlineComponent },
		{ path: 'guilds', component: CommunityGuildsComponent },
		{ path: 'gallery', component: CommunityGalleryComponent },
		{ path: 'support', component: CommunitySupportComponent }
	]},
	{ path: 'library', children: [
		{ path: '', redirectTo: '/', pathMatch: 'full' },
		{ path: 'rules', component: LibraryRulesComponent },
		{ path: 'faq', component: LibraryFaqComponent },
		{ path: 'serverinfo', component: LibraryServerInformationsComponent },
		{ path: 'download', component: LibraryDownloadComponent },
		{ path: 'achievements', component: LibraryAchievementsComponent }
	]},
	{ path: 'ranking', children: [
		{ path: '', redirectTo: '/', pathMatch: 'full' },
		{ path: 'top', component: RankingTopComponent },
		{ path: 'quests', component: RankingQuestsComponent },
		{ path: 'achievements', component: RankingAchievementsComponent },
		{ path: 'guilds', component: RankingGuildsComponent }
	]},
	{ path: 'player', children: [
		{ path: '', redirectTo: '/', pathMatch: 'full'},
		{ path: ':name', component: PlayerInfoComponent, resolve: { player: PlayerInfoResolverService } }
	]},
	{ path: 'account', canActivate: [LoginRouteGuard], canLoad: [LoginRouteGuard], children: [
		{ path: '', redirectTo: 'details', pathMatch: 'full' },
		{ path: 'details', component: AccountDetailsComponent },
		{ path: 'refferals', component: AccountRefferalsComponent }
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
