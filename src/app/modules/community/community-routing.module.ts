import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityOnlineComponent } from '@modules/community/online/community-online.component';
import { CommunityGuildsComponent } from '@modules/community/guilds/community-guilds.component';
import { CommunityGalleryComponent } from '@modules/community/gallery/gallery.component';
import { CommunitySupportComponent } from '@modules/community/support/community-support.component';

const routes: Routes = [
	{ path: 'community', children: [
		{ path: '', redirectTo: '/', pathMatch: 'full' },
		{ path: 'online', component: CommunityOnlineComponent },
		{ path: 'guilds', component: CommunityGuildsComponent },
		{ path: 'gallery', component: CommunityGalleryComponent },
		{ path: 'support', component: CommunitySupportComponent }
	]},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CommunityRoutingModule { }
