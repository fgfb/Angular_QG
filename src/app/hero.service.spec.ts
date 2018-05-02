import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { Services } from '@angular/core/src/view';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { BaseRequestOptions, Http, XHRBackend, HttpModule, Response, ResponseOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';

fdescribe('HeroService', () => {
  let mockBackend: MockBackend;
  let http: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService, HttpClient,
         MockBackend,
          BaseRequestOptions,
        {
          provide: HttpClient,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:(backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ],
      // imports: [HttpModule, HttpClient, HttpHandler]
    });
    mockBackend = getTestBed().get(MockBackend);
  });

  // it('should be created', inject([HeroService], (service: HeroService) => {
  //   expect(service).toBeTruthy();
  // }));

  it('should get all restaurants', async() => {
    let heroService: HeroService = getTestBed().get(HeroService);
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
            body: [{
              name: 'jathin'
            }]
          }
        )));
      });
      heroService.getHeroes().subscribe(
        (data) => {
          expect(data.length).toBe(1);
         // expect(data[0].id).toBe(26);
          // expect(data[0].name).toBe('jathin');
        });

  });

  

});
