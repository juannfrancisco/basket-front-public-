import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBoxScoreComponent } from './team-box-score.component';

describe('TeamBoxScoreComponent', () => {
  let component: TeamBoxScoreComponent;
  let fixture: ComponentFixture<TeamBoxScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBoxScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBoxScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
