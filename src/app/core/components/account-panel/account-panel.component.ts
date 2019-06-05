import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { LoginService } from '@shared/services/login.service';
import { DatabaseService } from '@shared/services/database.service';
import { ValidationService } from '@shared/services/validation.service';

@Component({
	selector: 'app-account-panel',
	templateUrl: './account-panel.component.html',
	styleUrls: ['./account-panel.component.scss'],
	providers: [LoginService, ValidationService]
})
export class AccountPanelComponent implements OnInit {
	loginForm: FormGroup;

	constructor(
		public formBuilder: FormBuilder,
		public loginService: LoginService,
		private messageService: MessageService,
		public db: DatabaseService
	) { }

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			login: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	get f() { return this.loginForm.controls; }

	onSubmit() {
		if (this.loginForm.invalid) {
			return;
		}

		const value = this.loginForm.value;
		this.db.getAccount(value.login).subscribe(account => {
			if (account.password === value.password) {
				this.loginService.login(value.login, (new Date().getTime() + 3600000).toString());
				this.loginForm.reset();
				return this.messageService.add({
					severity: 'success',
					summary: 'Login System',
					detail: 'Successfully logged in.'
				});
			} else {
				return this.messageService.add({
					severity: 'error',
					summary: "Login System",
					detail: "Failed to login. Your email or password is incorrect."
				});
			}
		}, error => {
			return this.messageService.add({
				severity: 'error',
				summary: "Login System",
				detail: "Failed to login. Check your email or password."
			});
		});
	}

	onLogout() {
		this.loginService.logout();
		this.loginForm.reset();
		this.messageService.add({ severity: 'success', summary: 'Logged Out', detail: 'We will be waiting!'});
	}
}
