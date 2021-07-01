import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.less']
})
export class MatrixComponent implements OnInit {

  letters: string[] = [];

  code: string = 'Pipka!';

  constructor() { }

  ngOnInit(): void {
    const text = '';
    // todo fill letters array and make awesome matrix effect, that would be useful, so you can actualy read it.
    
    
  }

}
