import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancierHeaderComponent } from './financier-header.component';

describe('FinancierHeaderComponent', () => {
  let component: FinancierHeaderComponent;
  let fixture: ComponentFixture<FinancierHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancierHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancierHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
