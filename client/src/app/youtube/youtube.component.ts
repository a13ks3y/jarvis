import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, JsonpClientBackend } from '@angular/common/http';
@Component({
  selector: 'the-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.less']
})
export class YoutubeComponent implements OnInit {
  browserOpened: boolean = false;
  apiBaseUrl: string;
  httpsOn: boolean = false;
  constructor(private http: HttpClient, private jsonp: JsonpClientBackend) { 
    const host = '192.168.1.66';
    const port = '3000';
    if (location.protocol === 'https:') {
      this.httpsOn = true;
    }
    this.apiBaseUrl = `${location.protocol}//${host}:${port}/api/youtube/`;
  }

  ngOnInit(): void {
    // @todo: check if sevrever is accesseble
    // @todo: should extend HttpClient?
    // @todo: consider using @ServerRequired decorator (create one)
  }
  callFuckingApi(api: string) {
    return new Promise<void>(resolve => {
      const url = this.apiBaseUrl + api;
      // @todo: check if other orgin too. Probably just fall-back to JSONP if http didn't worked? Or use JSONP always?
      if (this.httpsOn) {
        this.jsonp.handle(new HttpRequest('JSONP', url)).subscribe(() => {
          resolve();
        });
      } else {
        this.http.get(url).subscribe(() => {
          resolve();
        });  
      }
    });
  }
  start(): void {
    // @todo: let user choose which node should run youtube
    if (this.browserOpened) {
      // @todo: replace with pop-up
      alert('Already started!');
      return;
    }
    this.callFuckingApi('start').then(() => {
      this.browserOpened = true;
    });
  }
  stop(): void {
    this.callFuckingApi('stop').then(() => {
      this.browserOpened = false;
    });
  }
  play(): void {
    this.callFuckingApi('play');
  }
  pause() : void {
    this.callFuckingApi('pause');
  }
  next() : void {
    this.callFuckingApi('next');
  }
  prev() : void {
    this.callFuckingApi('perv');
  }
  toggleFullscreen() : void {
    this.callFuckingApi('toggleFullscreen');
  }  
}
