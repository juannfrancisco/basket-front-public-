import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipGamesComponent } from './championship-games.component';

describe('ChampionshipGamesComponent', () => {
  let component: ChampionshipGamesComponent;
  let fixture: ComponentFixture<ChampionshipGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionshipGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
