import { TestBed } from '@angular/core/testing';

import { PlayerInfoResolverService } from './player-info-resolver.service';

describe('PlayerInfoResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerInfoResolverService = TestBed.get(PlayerInfoResolverService);
    expect(service).toBeTruthy();
  });
});
