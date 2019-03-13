import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { FormControlService } from '../../services/form-control.service';

interface Language {
	name: string,
	flag: string
}

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
	brand = 'TugAAC';
	searchForm: FormGroup;
	languages: Language[];
	selectedLanguage: Language;

	constructor(
		public formBuilder: FormBuilder,
		public router: Router,
		public formService: FormControlService
	) {
		this.languages = [
			{ name: "English", flag: "english" },
			{ name: "Polish", flag: "polish" }
		];
	}

	ngOnInit() {
		this.searchForm = this.formBuilder.group({
			name: ['', Validators.required],
		});
	}

	get f() { return this.searchForm.controls; }

	onSearch() {
		if (this.formService.onSubmitCheck(this.searchForm)) {
			return;
		}
		
		this.router.navigate(['/player/' + this.searchForm.value.name]);
	}
}
