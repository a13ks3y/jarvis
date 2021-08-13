import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.less']
})
export class WikiComponent implements OnInit {
  started = false;
  apiBaseUrl: string;

  constructor(private http: HttpClient) {
    // @todo: figure-out how to manage endpoints
    const host = '192.168.1.66';
    const port = '3000';
    this.apiBaseUrl = `http://${host}:${port}/api/wiki/`;
  }

  ngOnInit(): void {
  }

  async toggleStatus(): Promise<void> {
    if (!this.started) {
      await this.http.get(this.apiBaseUrl + 'start').toPromise();
    } else {
      await this.http.get(this.apiBaseUrl + 'stop').toPromise();
    }
    this.started = !this.started;
  }

}
