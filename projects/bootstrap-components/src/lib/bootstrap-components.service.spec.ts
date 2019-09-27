import { TestBed } from '@angular/core/testing';

import { BootstrapComponentsService } from './bootstrap-components.service';

describe('BootstrapComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BootstrapComponentsService = TestBed.get(BootstrapComponentsService);
    expect(service).toBeTruthy();
  });
});
