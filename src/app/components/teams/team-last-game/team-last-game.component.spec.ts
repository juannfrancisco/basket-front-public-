import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLastGameComponent } from './team-last-game.component';

describe('TeamLastGameComponent', () => {
  let component: TeamLastGameComponent;
  let fixture: ComponentFixture<TeamLastGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamLastGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamLastGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
