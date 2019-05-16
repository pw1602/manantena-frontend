import { Component, OnInit } from '@angular/core';

import { LoginService } from '@/services/login.service';
import { PermissionService } from '@/services/permission.service';

@Component({
	selector: 'app-admin-panel',
	templateUrl: './admin-panel.component.html',
	styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
	constructor(
		public loginService: LoginService,
		public permissionService: PermissionService
	) { }

	ngOnInit() {
	}
}
