import { TestBed } from '@angular/core/testing';

import { DealProductsService } from './deal-products.service';

describe('DealProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DealProductsService = TestBed.get(DealProductsService);
    expect(service).toBeTruthy();
  });
});
