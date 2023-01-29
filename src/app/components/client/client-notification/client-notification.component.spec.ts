import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNotificationComponent } from './client-notification.component';

describe('ClientNotificationComponent', () => {
  let component: ClientNotificationComponent;
  let fixture: ComponentFixture<ClientNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
