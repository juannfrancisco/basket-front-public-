import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTeamStatsComponent } from './game-team-stats.component';

describe('GameTeamStatsComponent', () => {
  let component: GameTeamStatsComponent;
  let fixture: ComponentFixture<GameTeamStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameTeamStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTeamStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
