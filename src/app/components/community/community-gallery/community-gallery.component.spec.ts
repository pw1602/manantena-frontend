import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityGalleryComponent } from './community-gallery.component';

describe('CommunityGalleryComponent', () => {
  let component: CommunityGalleryComponent;
  let fixture: ComponentFixture<CommunityGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
