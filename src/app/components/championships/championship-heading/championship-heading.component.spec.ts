import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipHeadingComponent } from './championship-heading.component';

describe('ChampionshipHeadingComponent', () => {
  let component: ChampionshipHeadingComponent;
  let fixture: ComponentFixture<ChampionshipHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionshipHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
