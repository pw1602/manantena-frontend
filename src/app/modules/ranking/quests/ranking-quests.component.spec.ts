import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingQuestsComponent } from './ranking-quests.component';

describe('RankingQuestsComponent', () => {
  let component: RankingQuestsComponent;
  let fixture: ComponentFixture<RankingQuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingQuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingQuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
