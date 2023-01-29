import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairProgressComponent } from './repair-progress.component';

describe('RepairProgressComponent', () => {
  let component: RepairProgressComponent;
  let fixture: ComponentFixture<RepairProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
