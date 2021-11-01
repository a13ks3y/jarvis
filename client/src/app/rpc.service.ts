import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
/*
* This should encapsulate everything with transport data between nodes (both clients and servers),
* using every available options (websockets, webRTC, jsonp, etc.)
* */
@Injectable({
  providedIn: 'root'
})
export class RPCService {

  constructor(public http: HttpClient) { }

  public static makeURL(route: string): string {
    const host =  location.hostname; // location.hostname === 'localhost' ? '127.0.0.1' : location.hostname; // '192.168.1.66';
    const port = '3000';
    const protocol = 'http:';
    // @todo: what if (location.port !== port)?
    if (location.protocol === 'https:') {
      throw new Error('Not Implemented');
    } else {
      return `${protocol}//${host}:${port}/api/${route}`;
    }
  }

  async put(route: string, data: {}): Promise<any> {
    const url = RPCService.makeURL(route);
    // todo: check if http is available
    // todo: other options, like jsonp and tdlib usage.
    return this.http.put(url, data).toPromise();
  }
  private async isHttpAvailable(): Promise<boolean> {
    return Promise.resolve(true);
  }

  putFile(route: string, data: { dataUrl: string; createDateTime: Date }): Observable<any> {
    const fileName = `${data.dataUrl.replace('/', '-')}_${data.createDateTime.toUTCString()}`;
    const fileData = new FormData();
    const file = new File([data.dataUrl], fileName);
    fileData.append(fileName, file);
    const url = RPCService.makeURL(route);
    return this.http.put(url, fileData, {
      headers: new HttpHeaders('multipart/form-data')
    });
  }
  // @todo: make optional query params (and test it!)
  get(route: string): Observable<any> {
    const url = RPCService.makeURL(route);
    return this.http.get(url);
  }
}
