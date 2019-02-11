import { TestBed } from '@angular/core/testing';

import { EventosApiService } from './eventos-api.service';

describe('EventosApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventosApiService = TestBed.get(EventosApiService);
    expect(service).toBeTruthy();
  });
});
