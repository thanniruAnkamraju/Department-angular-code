import { TestBed } from '@angular/core/testing';

import { EmpassetService } from './empasset.service';

describe('EmpassetService', () => {
  let service: EmpassetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpassetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
