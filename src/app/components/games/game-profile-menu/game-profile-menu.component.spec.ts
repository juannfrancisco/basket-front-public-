import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProfileMenuComponent } from './game-profile-menu.component';

describe('GameProfileMenuComponent', () => {
  let component: GameProfileMenuComponent;
  let fixture: ComponentFixture<GameProfileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameProfileMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProfileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
