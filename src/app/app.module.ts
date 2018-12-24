import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightpanelComponent } from './components/right-panel/right-panel.component';
import { NewsComponent } from './components/news/news.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { OnlineComponent } from './components/online/online.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AccountPanelComponent } from './components/account-panel/account-panel.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';

@NgModule({
	declarations: [
		AppComponent,
		RightpanelComponent,
		NewsComponent,
		NavbarComponent,
		CarouselComponent,
		OnlineComponent,
		PlayerInfoComponent,
		ReversePipe,
		AccountPanelComponent,
		AccountDetailsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
