import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
	brand = 'Manantena';
	private searchForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router
	) { }

	ngOnInit() {
		this.searchForm = this.formBuilder.group({
			name: ['', Validators.required],
		});
	}

	get f() { return this.searchForm.controls; }

	onSearch() {
		this.router.navigate(['/player/' + this.searchForm.value.name]);
		this.searchForm.reset();
	}
}
