import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryAchievementsComponent } from './achievements/library-achievements.component';
import { LibraryDownloadComponent } from './download/library-download.component';
import { LibraryFaqComponent } from './faq/library-faq.component';
import { LibraryRulesComponent } from './rules/library-rules.component';
import { LibraryServerInformationsComponent } from './server-informations/library-server-informations.component';

@NgModule({
	declarations: [
		LibraryAchievementsComponent,
		LibraryDownloadComponent,
		LibraryFaqComponent,
		LibraryRulesComponent,
		LibraryServerInformationsComponent
	],
	imports: [
		CommonModule,
		LibraryRoutingModule
	]
})
export class LibraryModule { }
