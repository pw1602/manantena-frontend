import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingAchievementsComponent } from './ranking-achievements.component';

describe('RankingAchievementsComponent', () => {
  let component: RankingAchievementsComponent;
  let fixture: ComponentFixture<RankingAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
