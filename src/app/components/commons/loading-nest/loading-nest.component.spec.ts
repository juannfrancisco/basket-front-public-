import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingNestComponent } from './loading-nest.component';

describe('LoadingNestComponent', () => {
  let component: LoadingNestComponent;
  let fixture: ComponentFixture<LoadingNestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingNestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingNestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
