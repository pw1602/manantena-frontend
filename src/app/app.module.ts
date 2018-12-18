import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightpanelComponent } from './components/rightpanel/rightpanel.component';
import { NewsComponent } from './components/news/news.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { OnlineComponent } from './components/online/online.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';

const appRoutes: Routes = [
	{path: '', redirectTo: '/', pathMatch: 'full'},
	{path: '', component: NewsComponent},
	{path: 'online', component: OnlineComponent},
	{path: 'player', component: PlayerInfoComponent}
]

@NgModule({
	declarations: [
		AppComponent,
		RightpanelComponent,
		NewsComponent,
		NavbarComponent,
		CarouselComponent,
		OnlineComponent,
		PlayerInfoComponent
	],
	imports: [
		RouterModule.forRoot(
			appRoutes
		),
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
