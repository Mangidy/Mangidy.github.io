import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierAddreparationComponent } from './atelier-addreparation.component';

describe('AtelierAddreparationComponent', () => {
  let component: AtelierAddreparationComponent;
  let fixture: ComponentFixture<AtelierAddreparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtelierAddreparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtelierAddreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
