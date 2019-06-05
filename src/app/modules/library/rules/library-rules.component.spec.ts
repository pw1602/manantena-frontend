import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryRulesComponent } from './library-rules.component';

describe('LibraryRulesComponent', () => {
  let component: LibraryRulesComponent;
  let fixture: ComponentFixture<LibraryRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
