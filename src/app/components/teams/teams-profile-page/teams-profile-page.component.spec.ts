import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsProfilePageComponent } from './teams-profile-page.component';

describe('TeamsProfilePageComponent', () => {
  let component: TeamsProfilePageComponent;
  let fixture: ComponentFixture<TeamsProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
