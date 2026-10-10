import { TestBed } from '@angular/core/testing';

import { GuesserServiceTsService } from './guesser-service.ts.service';

describe('GuesserServiceTsService', () => {
  let service: GuesserServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuesserServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
