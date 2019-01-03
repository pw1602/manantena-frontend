import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { LoginService } from '../../../services/login.service';
import { FormControlService } from '../../../services/form-control.service';

@Component({
	selector: 'app-account-panel',
	templateUrl: './account-panel.component.html',
	styleUrls: ['./account-panel.component.scss']
})
export class AccountPanelComponent implements OnInit {
	private loginForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private loginService: LoginService,
		private formService: FormControlService
	) { }

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			login: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	get f() { return this.loginForm.controls }

	onSubmit() {
		if (this.formService.onSubmitCheck(this.loginForm)) {
			return;
		}

		const value = this.loginForm.value;
		if (value.login == 'user' && value.password == 'user') {
			this.loginService.login(value.login, (new Date().getTime() + 3600000).toString());
			this.loginForm.reset();
		}
	}

	onLogout() {
		this.loginService.logout();
		this.loginForm.reset();
	}
}
