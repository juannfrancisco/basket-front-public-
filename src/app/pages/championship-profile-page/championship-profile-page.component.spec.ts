import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipProfilePageComponent } from './championship-profile-page.component';

describe('ChampionshipProfilePageComponent', () => {
  let component: ChampionshipProfilePageComponent;
  let fixture: ComponentFixture<ChampionshipProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionshipProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
