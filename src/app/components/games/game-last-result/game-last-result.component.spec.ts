import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLastResultComponent } from './game-last-result.component';

describe('GameLastResultComponent', () => {
  let component: GameLastResultComponent;
  let fixture: ComponentFixture<GameLastResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameLastResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLastResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
