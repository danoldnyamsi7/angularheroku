import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertFundsComponent } from './transfert-funds.component';

describe('TransfertFundsComponent', () => {
  let component: TransfertFundsComponent;
  let fixture: ComponentFixture<TransfertFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfertFundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfertFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
