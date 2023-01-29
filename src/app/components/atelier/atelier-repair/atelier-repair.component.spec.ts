import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierRepairComponent } from './atelier-repair.component';

describe('AtelierRepairComponent', () => {
  let component: AtelierRepairComponent;
  let fixture: ComponentFixture<AtelierRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtelierRepairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtelierRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
