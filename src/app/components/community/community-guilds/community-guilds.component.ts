import { Component, OnInit } from '@angular/core';
import { Guild } from 'src/app/classes/guild';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
	selector: 'app-community-guilds',
	templateUrl: './community-guilds.component.html',
	styleUrls: ['./community-guilds.component.scss']
})
export class CommunityGuildsComponent implements OnInit {
	guilds: Guild[];

	constructor(
		public db: DatabaseService
	) { }

	ngOnInit() {
		this.db.getGuilds().subscribe(guilds => this.guilds = guilds);
	}
}
