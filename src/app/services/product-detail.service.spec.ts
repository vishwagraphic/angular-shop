import { TestBed } from '@angular/core/testing';

import { ProductDetailService } from './product-detail.service';

describe('CartDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductDetailService = TestBed.get(ProductDetailService);
    expect(service).toBeTruthy();
  });
});
