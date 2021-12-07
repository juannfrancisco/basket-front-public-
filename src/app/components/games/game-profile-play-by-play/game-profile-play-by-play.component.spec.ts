import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProfilePlayByPlayComponent } from './game-profile-play-by-play.component';

describe('GameProfilePlayByPlayComponent', () => {
  let component: GameProfilePlayByPlayComponent;
  let fixture: ComponentFixture<GameProfilePlayByPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameProfilePlayByPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProfilePlayByPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
