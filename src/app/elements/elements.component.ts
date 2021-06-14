import { Component, OnInit } from '@angular/core';
import * as PeriodicTableJSON from '../../assets/PeriodicTableJSON.json';

@Component({
  selector: 'the-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.less']
})
export class ElementsComponent implements OnInit {
  elements: {name: string, symbol: string}[] = PeriodicTableJSON.elements;
  compounds: {}[] = [];

  constructor() {
    this.elements.forEach(firstElement => {
      this.elements.forEach(secondElement => {
        this.compounds.push({
          title: `${firstElement.symbol} + ${secondElement.symbol}`,
          description: `${firstElement.name} + ${secondElement.name}`,
          firstElement, secondElement
        });
      });
    });
  }

  ngOnInit(): void {
  }

}
