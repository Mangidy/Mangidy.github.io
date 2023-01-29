import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancierPayementComponent } from './financier-payement.component';

describe('FinancierPayementComponent', () => {
  let component: FinancierPayementComponent;
  let fixture: ComponentFixture<FinancierPayementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancierPayementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancierPayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
