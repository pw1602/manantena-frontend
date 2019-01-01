import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingGuildsComponent } from './ranking-guilds.component';

describe('RankingGuildsComponent', () => {
  let component: RankingGuildsComponent;
  let fixture: ComponentFixture<RankingGuildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingGuildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingGuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
