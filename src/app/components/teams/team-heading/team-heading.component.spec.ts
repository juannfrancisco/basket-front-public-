import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamHeadingComponent } from './team-heading.component';

describe('TeamHeadingComponent', () => {
  let component: TeamHeadingComponent;
  let fixture: ComponentFixture<TeamHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
