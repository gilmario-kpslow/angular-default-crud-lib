import { TestBed } from '@angular/core/testing';

import { GenericCrudLibService } from './generic-crud-lib.service';

describe('GenericCrudLibService', () => {
  let service: GenericCrudLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericCrudLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
