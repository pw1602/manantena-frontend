import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightpanelComponent } from './components/right-panel/right-panel.component';
import { NewsComponent } from './components/news/news.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CommunityOnlineComponent } from './components/community/community-online/community-online.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AccountPanelComponent } from './components/account/account-panel/account-panel.component';
import { AccountDetailsComponent } from './components/account/account-details/account-details.component';
import { AccountCreateCharacterComponent } from './components/account/account-create-character/account-create-character.component';
import { AccountRefferalsComponent } from './components/account/account-refferals/account-refferals.component';
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
import { RegisterComponent } from './components/register/register.component';
import { RecoverComponent } from './components/recover/recover.component';

@NgModule({
	declarations: [
		AppComponent,
		RightpanelComponent,
		NewsComponent,
		NavbarComponent,
		CarouselComponent,
		CommunityOnlineComponent,
		PlayerInfoComponent,
		ReversePipe,
		AccountPanelComponent,
		AccountDetailsComponent,
		AccountCreateCharacterComponent,
		AccountRefferalsComponent,
		CommunityGuildsComponent,
		CommunityGalleryComponent,
		CommunitySupportComponent,
		LibraryRulesComponent,
		LibraryFaqComponent,
		LibraryServerInformationsComponent,
		LibraryDownloadComponent,
		LibraryAchievementsComponent,
		RankingTopComponent,
		RankingQuestsComponent,
		RankingAchievementsComponent,
		RankingGuildsComponent,
		RegisterComponent,
		RecoverComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
