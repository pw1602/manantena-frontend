import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRefferalsComponent } from './account-refferals.component';

describe('AccountRefferalsComponent', () => {
  let component: AccountRefferalsComponent;
  let fixture: ComponentFixture<AccountRefferalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountRefferalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRefferalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
