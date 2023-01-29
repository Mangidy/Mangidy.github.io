import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierNotificationComponent } from './atelier-notification.component';

describe('AtelierNotificationComponent', () => {
  let component: AtelierNotificationComponent;
  let fixture: ComponentFixture<AtelierNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtelierNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtelierNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
