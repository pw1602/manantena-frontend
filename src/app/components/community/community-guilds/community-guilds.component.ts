import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { DatabaseService } from '@/services/database.service';

import { Guild } from '@/classes/guild';

@Component({
	selector: 'app-community-guilds',
	templateUrl: './community-guilds.component.html',
	styleUrls: ['./community-guilds.component.scss']
})
export class CommunityGuildsComponent implements OnInit {
	constructor(
		public db: DatabaseService
	) { }

	ngOnInit() {
	}

	guilds$: Observable<Guild[]> = this.db.getGuilds().pipe(shareReplay());
}
