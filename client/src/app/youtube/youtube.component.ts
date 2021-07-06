import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'the-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.less']
})
export class YoutubeComponent implements OnInit {
  browserOpened = false;
  apiBaseUrl: string;
  constructor(private http: HttpClient) { 
    const host = '192.168.1.66';
    const port = '3000';
    this.apiBaseUrl = `${location.protocol}//${host}:${port}/api/youtube/`;
  }

  ngOnInit(): void {
    // @todo: check if sevrever is accesseble
    // @todo: should extend HttpClient?
    // @todo: consider using @ServerRequired decorator (create one)
  }
  start(): void {
    // @todo: let user choose which node should run youtube
    if (this.browserOpened) {
      // @todo: replace with pop-up
      alert('Already started!');
      return;
    }
    this.http.get(this.apiBaseUrl + 'start').toPromise().then(() => {
      this.browserOpened = true;
    });
  }
  stop(): void {
    this.http.get(this.apiBaseUrl + 'stop').toPromise().then(() => {
      this.browserOpened = false;
    });
  }
  play(): void {
    this.http.get(this.apiBaseUrl + 'play').toPromise();
  }
  pause() : void {
    this.http.get(this.apiBaseUrl + 'pause').toPromise();
  }
  next() : void {
    this.http.get(this.apiBaseUrl + 'next').toPromise();
  }
  prev() : void {
    this.http.get(this.apiBaseUrl + 'prev').toPromise();
  }
  toggleFullscreen() : void {
    this.http.get(this.apiBaseUrl + 'toggleFullscreen').toPromise();
  }

  
}
