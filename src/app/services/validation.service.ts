import { Injectable } from '@angular/core';

@Injectable({
  	providedIn: 'root'
})
export class ValidationService {
	constructor() { }
	  
	static getValidationMessage(validator: string, validatorValue?: any) {
		const messages = {
			'required': 'This field is required',
			'minlength': `Min lenght is ${validatorValue.requiredLength} characters`,
			'maxlength': `Max lenght is ${validatorValue.requiredLength} characters`,
			'email': 'This email is not valid!',
			'retyped': 'This field is not equal with previous!'
		};

		return messages[validator];
	}
}
