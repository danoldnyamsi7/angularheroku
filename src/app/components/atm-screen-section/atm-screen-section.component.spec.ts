import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmScreenSectionComponent } from './atm-screen-section.component';

describe('AtmScreenSectionComponent', () => {
  let component: AtmScreenSectionComponent;
  let fixture: ComponentFixture<AtmScreenSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmScreenSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmScreenSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
