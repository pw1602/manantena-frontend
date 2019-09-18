import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryRulesComponent } from '@modules/library/rules/library-rules.component';
import { LibraryFaqComponent } from '@modules/library/faq/library-faq.component';
import { LibraryServerInformationsComponent } from '@modules/library/server-informations/library-server-informations.component';
import { LibraryDownloadComponent } from '@modules/library/download/library-download.component';
import { LibraryAchievementsComponent } from '@modules/library/achievements/library-achievements.component';

const routes: Routes = [
	{ path: 'library', children: [
		{ path: '', redirectTo: '/', pathMatch: 'full' },
		{ path: 'rules', component: LibraryRulesComponent },
		{ path: 'faq', component: LibraryFaqComponent },
		{ path: 'serverinfo', component: LibraryServerInformationsComponent },
		{ path: 'download', component: LibraryDownloadComponent },
		{ path: 'achievements', component: LibraryAchievementsComponent }
	]},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LibraryRoutingModule { }
