import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancierFooterComponent } from './financier-footer.component';

describe('FinancierFooterComponent', () => {
  let component: FinancierFooterComponent;
  let fixture: ComponentFixture<FinancierFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancierFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancierFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
