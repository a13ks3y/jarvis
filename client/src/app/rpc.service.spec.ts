/* tslint:disable:no-string-literal */
// noinspection ES6MissingAwait

import {ComponentFixture, TestBed} from '@angular/core/testing';

import { RPCService } from './rpc.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('RPCService', () => {
  let service: RPCService;
  let fixture: ComponentFixture<RPCService>;
  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
    service = TestBed.inject(RPCService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check if server available by http', async () => {
    // @todo emulate both true and false cases, using fake http service
    expect(await service['isHttpAvailable']()).toBeInstanceOf(Boolean);
  });
  it('should make valid url for REST-api call on the server', () => {
    // @todo also check the host and protocol (http/https)
    const url = RPCService.makeURL('some/route');
    expect(url).toBeInstanceOf(String);
    expect(url.length).toBeGreaterThan(0);
    expect(url.includes('some/route')).toBeTrue();
  });
  it('should make a call to http server when trying to put something', async () => {
    const route = 'test/route';
    const data = {some: 'data'};
    const url = RPCService.makeURL(route);
    const spy = spyOn(service.http, 'put');
    service.put(route, data);
    expect(spy).toHaveBeenCalledWith(url, data);
  });
  it('should make a call to http server when trying to put some (one) file', async () => {
    const route = 'test/route';
    const data = { dataUrl: '', createDateTime: new Date()};
    const spy = spyOn(service.http, 'put');
    service.putFile(route, data);
    expect(spy).toHaveBeenCalled();
  });
  it('should make a get call to a server', () => {
    const route = 'test/route';
    const url = RPCService.makeURL(route);
    const spy = spyOn(service.http, 'get');
    service.get(route);
    expect(spy).toHaveBeenCalledWith(url);
  })
});
