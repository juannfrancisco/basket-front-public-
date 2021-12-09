import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProfileStatsComponent } from './game-profile-stats.component';

describe('GameProfileStatsComponent', () => {
  let component: GameProfileStatsComponent;
  let fixture: ComponentFixture<GameProfileStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameProfileStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProfileStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
