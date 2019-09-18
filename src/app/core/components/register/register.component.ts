import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { ValidationService } from '@shared/services';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
	providers: [ValidationService]
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder
	) {}

	ngOnInit() {
		this.registerForm = this.formBuilder.group({
			login: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
			email: ['', Validators.compose([Validators.required, Validators.email])],
			username: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(25)])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
			retypePassword: ['', Validators.required],
			rules: ['', Validators.requiredTrue]
		});
	}

	get f() { return this.registerForm.controls }

	onSubmit() {
		const value = this.registerForm.value;

		if (value.retypePassword != value.password) {
			this.registerForm.controls.retypePassword.setErrors({retyped: false});
		}

		if (this.registerForm.invalid) {
			return;
		}
	}
}
