import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.less']
})
export class NodesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // @todo: load nodes from server (ws connection?)
    // @hack: I can make any request to any server, using img/script/iframe XSS technics, but it's not XSS, it's for good.
  }

}
