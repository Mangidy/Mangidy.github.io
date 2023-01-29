import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRecoveryComponent } from './car-recovery.component';

describe('CarRecoveryComponent', () => {
  let component: CarRecoveryComponent;
  let fixture: ComponentFixture<CarRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRecoveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
