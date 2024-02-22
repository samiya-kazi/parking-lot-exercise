import { TestBed } from '@angular/core/testing';

import { OccupiedLogsService } from './occupied-logs.service';

describe('OccupiedLogsService', () => {
  let service: OccupiedLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OccupiedLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
