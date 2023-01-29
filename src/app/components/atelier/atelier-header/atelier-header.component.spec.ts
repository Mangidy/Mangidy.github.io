import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierHeaderComponent } from './atelier-header.component';

describe('AtelierHeaderComponent', () => {
  let component: AtelierHeaderComponent;
  let fixture: ComponentFixture<AtelierHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtelierHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtelierHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
