import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryDownloadComponent } from './library-download.component';

describe('LibraryDownloadComponent', () => {
  let component: LibraryDownloadComponent;
  let fixture: ComponentFixture<LibraryDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
