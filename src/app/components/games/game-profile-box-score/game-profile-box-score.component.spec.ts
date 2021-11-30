import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProfileBoxScoreComponent } from './game-profile-box-score.component';

describe('GameProfileBoxScoreComponent', () => {
  let component: GameProfileBoxScoreComponent;
  let fixture: ComponentFixture<GameProfileBoxScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameProfileBoxScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProfileBoxScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
