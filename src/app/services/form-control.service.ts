import { Injectable } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class FormControlService {
	constructor() {}

	check(value: AbstractControl): boolean {
		if (value.invalid && (value.touched || value.dirty)) {
			return true;
		}

		return false;
	}

	getHTMLError(inputValue: AbstractControl): string {
		let text = '';

		if (inputValue.errors == null) {
			return '';
		}

		Object.keys(inputValue.errors).forEach(error => {
			switch(error) {
				default:
					text = '';
					break;
				case 'required':
					text = 'is required!';
					break;
				case 'minlength':
					text = 'must have minimum ' + inputValue.errors.minlength.requiredLength + ' characters length!';
					break;
				case 'maxlength':
					text = 'must have maximum ' + inputValue.errors.maxlength.requiredLength + ' characters length!';
					break;
				case 'email':
					text = 'is not valid!'
					break;
				case 'retyped':
					text = ' must be equal with password!'
					break;
			}
		});

		return text;
	}

	onSubmitCheck(group: FormGroup): boolean {
		const value = group.value;
		let hasError = false;

		Object.keys(value).forEach(key => {
			const tmp = group.get(key);

			if (tmp.invalid) {
				tmp.markAsDirty();
				tmp.markAsTouched();
				hasError = true;
			}
		});

		return hasError;
	}
}
