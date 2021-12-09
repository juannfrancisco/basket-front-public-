import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipTeamsComponent } from './championship-teams.component';

describe('ChampionshipTeamsComponent', () => {
  let component: ChampionshipTeamsComponent;
  let fixture: ComponentFixture<ChampionshipTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionshipTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
