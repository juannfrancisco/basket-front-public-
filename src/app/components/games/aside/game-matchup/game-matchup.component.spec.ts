import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMatchupComponent } from './game-matchup.component';

describe('GameMatchupComponent', () => {
  let component: GameMatchupComponent;
  let fixture: ComponentFixture<GameMatchupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameMatchupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMatchupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
