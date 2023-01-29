import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancierStatistiqueComponent } from './financier-statistique.component';

describe('FinancierStatistiqueComponent', () => {
  let component: FinancierStatistiqueComponent;
  let fixture: ComponentFixture<FinancierStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancierStatistiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancierStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
