import { TestBed } from '@angular/core/testing';

import { FinancierGuard } from './financier.guard';

describe('FinancierGuard', () => {
  let guard: FinancierGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FinancierGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
