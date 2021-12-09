import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLeadersComponent } from './game-leaders.component';

describe('GameLeadersComponent', () => {
  let component: GameLeadersComponent;
  let fixture: ComponentFixture<GameLeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameLeadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
