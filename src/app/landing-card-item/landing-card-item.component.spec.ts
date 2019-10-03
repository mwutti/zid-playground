import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCardItemComponent } from './landing-card-item.component';

describe('LandingCardItemComponent', () => {
  let component: LandingCardItemComponent;
  let fixture: ComponentFixture<LandingCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingCardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
