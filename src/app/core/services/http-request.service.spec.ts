import { TestBed } from '@angular/core/testing';

import { HttpRequestService } from './http-request.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing'


xdescribe('HttpRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule , RouterTestingModule ]
  }));

  it('should be created', () => {
    const service: HttpRequestService = TestBed.get(HttpRequestService);
    expect(service).toBeTruthy();
  });
});
