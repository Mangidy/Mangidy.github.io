import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierLeaveComponent } from './atelier-leave.component';

describe('AtelierLeaveComponent', () => {
  let component: AtelierLeaveComponent;
  let fixture: ComponentFixture<AtelierLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtelierLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtelierLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
