import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAchievementsComponent } from './library-achievements.component';

describe('LibraryAchievementsComponent', () => {
  let component: LibraryAchievementsComponent;
  let fixture: ComponentFixture<LibraryAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
