import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { DatabaseService } from '@shared/services/database.service';

import { Guild } from '@/core/classes/guild';

@Component({
	selector: 'app-community-guilds',
	templateUrl: './community-guilds.component.html',
	styleUrls: ['./community-guilds.component.scss']
})
export class CommunityGuildsComponent implements OnInit {
	guilds$: Observable<Guild[]> = this.db.getGuilds().pipe(shareReplay());

	constructor(
		public db: DatabaseService
	) { }

	ngOnInit() {
	}
}
