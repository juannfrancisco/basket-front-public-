import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProfileOverviewComponent } from './game-profile-overview.component';

describe('GameProfileOverviewComponent', () => {
  let component: GameProfileOverviewComponent;
  let fixture: ComponentFixture<GameProfileOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameProfileOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProfileOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
