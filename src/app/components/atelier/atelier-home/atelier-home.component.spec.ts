import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierHomeComponent } from './atelier-home.component';

describe('AtelierHomeComponent', () => {
  let component: AtelierHomeComponent;
  let fixture: ComponentFixture<AtelierHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtelierHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtelierHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
