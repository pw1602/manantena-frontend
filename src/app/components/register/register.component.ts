import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { FormControlService } from 'src/app/services/form-control.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;

	constructor(public formBuilder: FormBuilder, public formService: FormControlService) {}

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

		if (this.formService.onSubmitCheck(this.registerForm)) {
			return;
		};
	}
}
