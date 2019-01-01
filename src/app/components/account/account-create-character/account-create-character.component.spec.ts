import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCreateCharacterComponent } from './account-create-character.component';

describe('CreateCharacterComponent', () => {
  let component: AccountCreateCharacterComponent;
  let fixture: ComponentFixture<AccountCreateCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCreateCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
