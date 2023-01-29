import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierReceptionComponent } from './atelier-reception.component';

describe('AtelierReceptionComponent', () => {
  let component: AtelierReceptionComponent;
  let fixture: ComponentFixture<AtelierReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtelierReceptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtelierReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
