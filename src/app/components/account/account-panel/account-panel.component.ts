import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { LoginService } from '../../../services/login.service';
import { FormControlService } from '../../../services/form-control.service';
import { DatabaseService } from 'src/app/services/database.service';

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
		private messageService: MessageService,
		public db: DatabaseService
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
		this.db.getAccount(value.login).subscribe(account => {
			if (account === undefined) {
				return this.messageService.add({ severity: 'error', summary: "Login System", detail: "Failed to login. Your email or password is incorrect." });
			}

			if (account.password === value.password) {
				this.loginService.login(value.login, (new Date().getTime() + 3600000).toString());
				this.loginForm.reset();
				return this.messageService.add({ severity: 'success', summary: "Login System", detail: "Successfully logged in." });
			} else {
				return this.messageService.add({ severity: 'error', summary: "Login System", detail: "Failed to login. Your email or password is incorrect." });
			}
		});
	}

	onLogout() {
		this.loginService.logout();
		this.loginForm.reset();
		this.messageService.add({ severity: 'success', summary: 'Logged Out', detail: 'We will be waiting, user!'});
	}
}
