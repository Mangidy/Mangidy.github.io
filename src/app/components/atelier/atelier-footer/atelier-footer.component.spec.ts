import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierFooterComponent } from './atelier-footer.component';

describe('AtelierFooterComponent', () => {
  let component: AtelierFooterComponent;
  let fixture: ComponentFixture<AtelierFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtelierFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtelierFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
