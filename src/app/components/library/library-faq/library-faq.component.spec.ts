import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryFaqComponent } from './library-faq.component';

describe('LibraryFaqComponent', () => {
  let component: LibraryFaqComponent;
  let fixture: ComponentFixture<LibraryFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
