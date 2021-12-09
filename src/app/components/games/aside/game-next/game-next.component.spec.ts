import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameNextComponent } from './game-next.component';

describe('GameNextComponent', () => {
  let component: GameNextComponent;
  let fixture: ComponentFixture<GameNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameNextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
