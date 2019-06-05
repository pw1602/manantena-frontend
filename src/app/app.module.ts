import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RightpanelComponent } from './core/components/right-panel/right-panel.component';
import { NewsComponent } from './core/components/news/news.component';
import { NavbarComponent } from '@core/components/header/header.component';
import { CommunityOnlineComponent } from '@/modules/community/online/community-online.component';
import { PlayerInfoComponent } from './core/components/player-info/player-info.component';
import { RegisterComponent } from './core/components/register/register.component';
import { RecoverComponent } from './core/components/recover/recover.component';
import { ForumComponent } from './modules/forum/forum.component';
import { HintsComponent } from './core/components/hints/hints.component';
import { AdminPanelComponent } from './core/components/admin-panel/admin-panel/admin-panel.component';
import { AdminReportsComponent } from './core/components/admin-panel/admin-reports/admin-reports.component';
import { AdminStatisticsComponent } from './core/components/admin-panel/admin-statistics/admin-statistics.component';
import { AdminOverviewComponent } from './core/components/admin-panel/admin-overview/admin-overview.component';
import { ErrorMessageComponent } from '@shared/components/error-message/error-message.component';
import { AccountPanelComponent } from './core/components/account-panel/account-panel.component';

import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimePipe } from '@shared/pipes/time.pipe';
import { CommunityModule } from './modules/community/community.module';
import { LibraryModule } from './modules/library/library.module';
import { AccountModule } from './modules/account/account.module';
import { RankingModule } from './modules/ranking/ranking.module';

@NgModule({
	declarations: [
		AppComponent,
		RightpanelComponent,
		NewsComponent,
		NavbarComponent,
		CommunityOnlineComponent,
		PlayerInfoComponent,
		ReversePipe,
		RegisterComponent,
		RecoverComponent,
		TimePipe,
		ForumComponent,
		HintsComponent,
		AdminPanelComponent,
		AdminReportsComponent,
		AdminStatisticsComponent,
		AdminOverviewComponent,
		ErrorMessageComponent,
		AccountPanelComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		BrowserAnimationsModule,
		PaginatorModule,
		SelectButtonModule,
		ToastModule,
		AccountModule,
		CommunityModule,
		LibraryModule,
		RankingModule
	],
	providers: [MessageService],
	bootstrap: [AppComponent]
})
export class AppModule { }
