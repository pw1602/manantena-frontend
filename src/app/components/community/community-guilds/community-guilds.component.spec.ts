import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityGuildsComponent } from './community-guilds.component';

describe('CommunityGuildsComponent', () => {
  let component: CommunityGuildsComponent;
  let fixture: ComponentFixture<CommunityGuildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityGuildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityGuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
