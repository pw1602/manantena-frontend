import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { FormControlService } from '../../services/form-control.service';
import { SiteOptionsService } from 'src/app/services/site-options.service';

interface Language {
	name: string,
	flag: string,
	code: string
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
		public formService: FormControlService,
		public siteOptions: SiteOptionsService,
		@Inject(LOCALE_ID) protected localeId: string
	) {
		this.languages = [
			{ name: "English", flag: "english", code: 'en' },
			{ name: "Polish", flag: "polish", code: 'pl' }
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

	onLanguageChange(event) {
		if (event.value.code != this.localeId) {
			this.localeId = event.value.code;
			//this.router.navigateByUrl('/' + event.value.code + '/' + this.router.url);
			const url = "/" + this.localeId + this.router.url;
			location.assign(url);
		}
	}
}
