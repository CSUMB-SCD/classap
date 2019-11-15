import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [HttpService]
  }));

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });

  it('expects service to fetch data with GET',
  inject([HttpTestingController, HttpService],
    (httpMock: HttpTestingController, service: HttpService) => {
      // We call the service
      service.getBeer().subscribe(data => {
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('https://api.openbrewerydb.org/breweries');
      expect(req.request.method).toEqual('GET');
      // Then we set the fake data to be returned by the mock
      //req.flush({data: ...});
    })
);

  it('expects service to fetch data with proper sorting',
  inject([HttpTestingController, HttpService],
    (httpMock: HttpTestingController, service: HttpService) => {
      // We call the service
      service.getBeer().subscribe(data => {
        // expect(...);
      });
      // Then we set the fake data to be returned by the mock
      //req.flush({data: ...});
    })
);


});
