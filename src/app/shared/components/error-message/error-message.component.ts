import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { ValidationService } from '@shared/services/validation.service';

@Component({
	selector: 'app-error-message',
	templateUrl: './error-message.component.html',
	styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {
	@Input() control: AbstractControl;

	get errorMessage() {
		for (let key in this.control.errors) {
			if (this.control.errors.hasOwnProperty(key) && (this.control.dirty || this.control.touched)) {
				return ValidationService.getValidationMessage(key, this.control.errors[key])
			}
		}

		return null;
	}
}
