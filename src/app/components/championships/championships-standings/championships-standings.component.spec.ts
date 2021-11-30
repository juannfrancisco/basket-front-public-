import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipsStandingsComponent } from './championships-standings.component';

describe('ChampionshipsStandingsComponent', () => {
  let component: ChampionshipsStandingsComponent;
  let fixture: ComponentFixture<ChampionshipsStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionshipsStandingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipsStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
