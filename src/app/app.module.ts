import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent} from '@/app.component';

import { AccountModule } from '@modules/account';
import { CommunityModule } from '@modules/community';
import { LibraryModule } from '@modules/library';
import { RankingModule } from '@modules/ranking';

import { ForumComponent } from '@modules/forum/forum.component';
import { ErrorMessageComponent } from '@shared/components';
import {
	RightpanelComponent,
	NewsComponent,
	NavbarComponent,
	PlayerInfoComponent,
	RegisterComponent,
	RecoverComponent,
	HintsComponent,
	AdminPanelComponent,
	AdminReportsComponent,
	AdminStatisticsComponent,
	AdminOverviewComponent,
	AccountPanelComponent,
	SmallNewsComponent,
	BigNewsComponent
} from '@core/components';

import { ReversePipe, TimePipe } from '@shared/pipes';


@NgModule({
	declarations: [
		AppComponent,
		RightpanelComponent,
		NewsComponent,
		NavbarComponent,
		PlayerInfoComponent,
		RegisterComponent,
		RecoverComponent,
		ForumComponent,
		HintsComponent,
		AdminPanelComponent,
		AdminReportsComponent,
		AdminStatisticsComponent,
		AdminOverviewComponent,
		ErrorMessageComponent,
		AccountPanelComponent,
		SmallNewsComponent,
		BigNewsComponent,
		ReversePipe,
		TimePipe,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
		BrowserAnimationsModule,
		PaginatorModule,
		SelectButtonModule,
		ToastModule,
		AccountModule,
		CommunityModule,
		LibraryModule,
		RankingModule,
		AppRoutingModule,
	],
	providers: [MessageService],
	bootstrap: [AppComponent]
})
export class AppModule { }
