import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipLastResultsComponent } from './championship-last-results.component';

describe('ChampionshipLastResultsComponent', () => {
  let component: ChampionshipLastResultsComponent;
  let fixture: ComponentFixture<ChampionshipLastResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionshipLastResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipLastResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
