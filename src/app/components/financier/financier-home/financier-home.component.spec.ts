import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancierHomeComponent } from './financier-home.component';

describe('FinancierHomeComponent', () => {
  let component: FinancierHomeComponent;
  let fixture: ComponentFixture<FinancierHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancierHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancierHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
