import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancierNotificationComponent } from './financier-notification.component';

describe('FinancierNotificationComponent', () => {
  let component: FinancierNotificationComponent;
  let fixture: ComponentFixture<FinancierNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancierNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancierNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
