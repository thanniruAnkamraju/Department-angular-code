import { TestBed } from '@angular/core/testing';

import { EamassetService } from './eamasset.service';

describe('EamassetService', () => {
  let service: EamassetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EamassetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
