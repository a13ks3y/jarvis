import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, JsonpClientBackend } from '@angular/common/http';
@Component({
  selector: 'the-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.less']
})
export class YoutubeComponent implements OnInit {
  browserOpened: boolean = false;
  httpsOn: boolean = false;
  constructor(private http: HttpClient, private jsonp: JsonpClientBackend) {}
  getApiBaseUrl(protocol: string = null) {
    const host = location.hostname; //'192.168.1.66';
    const port = '3000';
    if (location.protocol === 'https:' || location.port !== port) {
      this.httpsOn = true;
    }
    return `${protocol || location.protocol}//${host}:${port}/api/youtube/`;
  }

  ngOnInit(): void {
    // @todo: check if sevrever is accesseble
    // @todo: should extend HttpClient?
    // @todo: consider using @ServerRequired decorator (create one)
  }
  callFuckingApi(api: string) {
    return new Promise<void>(resolve => {
      // @todo: check if other orgin too. Probably just fall-back to JSONP if http didn't worked? Or use JSONP always?
      if (this.httpsOn) {
        const script = document.createElement('img');        
        script.src = this.getApiBaseUrl('http') + api;
        
        const resolveAndClean = (element) => {
          resolve();
          document.body.removeChild(element);
        }
        script.onload = resolveAndClean;
        script.onerror = resolveAndClean;
        document.body.appendChild(script);
        // this.jsonp.handle(new HttpRequest('JSONP', this.getApiBaseUrl('http') + api)).subscribe(() => {
        //   resolve();
        // });
      } else {
        this.http.get(this.getApiBaseUrl() + api).subscribe(() => {
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
