import { TestBed } from '@angular/core/testing';

import { EcartService } from './ecart.service';

describe('EcartService', () => {
  let service: EcartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
