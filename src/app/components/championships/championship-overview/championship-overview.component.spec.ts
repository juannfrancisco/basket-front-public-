import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipOverviewComponent } from './championship-overview.component';

describe('ChampionshipOverviewComponent', () => {
  let component: ChampionshipOverviewComponent;
  let fixture: ComponentFixture<ChampionshipOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionshipOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
