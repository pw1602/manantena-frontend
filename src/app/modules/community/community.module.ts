import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { CommunityGalleryComponent } from './gallery/gallery.component';
import { CommunityGuildsComponent } from './guilds/community-guilds.component';
import { CommunityOnlineComponent } from './online/community-online.component';
import { CommunitySupportComponent } from './support/community-support.component';

@NgModule({
	declarations: [
		CommunityGalleryComponent,
		CommunityGuildsComponent,
		CommunityOnlineComponent,
		CommunitySupportComponent
	],
	imports: [
		CommonModule,
		CommunityRoutingModule
	]
})
export class CommunityModule { }
