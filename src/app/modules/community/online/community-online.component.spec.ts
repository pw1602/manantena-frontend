import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityOnlineComponent } from './community-online.component';

describe('OnlineComponent', () => {
  let component: CommunityOnlineComponent;
  let fixture: ComponentFixture<CommunityOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
