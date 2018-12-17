import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightpanelComponent } from './rightpanel/rightpanel.component';
import { NewsComponent } from './news/news.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';

const appRoutes: Routes = [
	{path: '', redirectTo: '/', pathMatch: 'full'},
	{path: '', component: NewsComponent}
]

@NgModule({
	declarations: [
		AppComponent,
		RightpanelComponent,
		NewsComponent,
		NavbarComponent,
		CarouselComponent
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
