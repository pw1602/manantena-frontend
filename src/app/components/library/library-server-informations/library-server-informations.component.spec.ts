import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryServerInformationsComponent } from './library-server-informations.component';

describe('LibraryServerInformationsComponent', () => {
  let component: LibraryServerInformationsComponent;
  let fixture: ComponentFixture<LibraryServerInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryServerInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryServerInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
