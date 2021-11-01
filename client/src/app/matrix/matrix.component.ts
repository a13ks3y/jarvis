import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.less']
})
export class MatrixComponent implements OnInit {

  letters: string[] = [];

  code = 'Pipka!';

  constructor() { }

  ngOnInit(): void {
    const text = '';
    // @todo: make code-rain effect, that would be useful, so you can actually read it.
    // to show readable text, the text should be broken to small pieces.
    // translate rows to vertical lines or not?
    // there is a couple layers in original code-rain effect,
    // how much layers should it be? which text should be placed on different layers?
  }

}
