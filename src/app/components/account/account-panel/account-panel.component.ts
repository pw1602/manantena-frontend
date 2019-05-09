import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { LoginService } from '../../../services/login.service';
import { FormControlService } from '../../../services/form-control.service';

@Component({
	selector: 'app-account-panel',
	templateUrl: './account-panel.component.html',
	styleUrls: ['./account-panel.component.scss'],
	providers: [LoginService, FormControlService]
})
export class AccountPanelComponent implements OnInit {
	loginForm: FormGroup;

	constructor(
		public formBuilder: FormBuilder,
		public loginService: LoginService,
		public formService: FormControlService,
		private messageService: MessageService
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
			this.messageService.add({ severity: 'error', summary: 'Logged In', detail: 'Your login or password is incorrect!'});
			return;
		}

		const value = this.loginForm.value;
		if (value.login == 'user' && value.password == 'user') {
			this.loginService.login(value.login, (new Date().getTime() + 3600000).toString());
			this.loginForm.reset();
			this.messageService.add({ severity: 'success', summary: 'Logged In', detail: 'Welcome, user!'});
		}
	}

	onLogout() {
		this.loginService.logout();
		this.loginForm.reset();
		this.messageService.add({ severity: 'success', summary: 'Logged Out', detail: 'We will be waiting, user!'});
	}
}
