import { TestBed } from '@angular/core/testing';

import { SiteOptionsService } from './site-options.service';

describe('SiteOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiteOptionsService = TestBed.get(SiteOptionsService);
    expect(service).toBeTruthy();
  });
});
