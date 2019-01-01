import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { LoginService } from '../../../services/login.service';

@Component({
	selector: 'app-account-panel',
	templateUrl: './account-panel.component.html',
	styleUrls: ['./account-panel.component.scss']
})
export class AccountPanelComponent implements OnInit {
	private loginForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private loginService: LoginService
	) { }

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			login: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	get f() { return this.loginForm.controls; }

	onSubmit() {
		const value = this.loginForm.value;

		if (!value.login || !value.password) {
			return;
		}

		if (value.login == 'user' && value.password == 'user') {
			this.loginService.login(value.login, (new Date().getTime() + 3600000).toString());
			this.loginForm.reset();
		}
	}

	onLogout() {
		this.loginService.logout();
	}
}
