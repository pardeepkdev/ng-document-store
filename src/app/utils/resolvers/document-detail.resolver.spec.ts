import { TestBed } from '@angular/core/testing';

import { DocumentDetailResolver } from './document-detail.resolver';

describe('DocumentDetailResolver', () => {
  let resolver: DocumentDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DocumentDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
