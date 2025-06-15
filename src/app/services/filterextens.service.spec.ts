import { TestBed } from '@angular/core/testing';

import { FilterextensService } from './filterextens.service';

describe('FilterextensService', () => {
  let service: FilterextensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterextensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
