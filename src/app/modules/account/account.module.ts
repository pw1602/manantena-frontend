import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountCreateCharacterComponent } from './create-character/create-character.component';
import { AccountDetailsComponent } from './dashboard/account-details.component';
import { AccountRefferalsComponent } from './refferals/account-refferals.component';

@NgModule({
	declarations: [
		AccountCreateCharacterComponent,
		AccountDetailsComponent,
		AccountRefferalsComponent
	],
	imports: [
		CommonModule,
		AccountRoutingModule
	]
})
export class AccountModule { }
