import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.less']
})
export class WikiComponent implements OnInit {
  started: boolean = false;
  apiBaseUrl: string;

  constructor(private http: HttpClient) { 
    const host = '192.168.1.66';
    const port = '3000';
    this.apiBaseUrl = `http://${host}:${port}/api/wiki/`;
  }

  ngOnInit(): void {
  }

  toggleStatus(): void {
    if (!this.started) {
      this.http.get(this.apiBaseUrl + 'start').toPromise();
    } else {
      this.http.get(this.apiBaseUrl + 'stop').toPromise();
    }
    this.started = !this.started;
  }

}
