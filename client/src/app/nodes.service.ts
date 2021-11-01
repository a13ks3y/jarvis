import {Injectable} from '@angular/core';
import {NodeInfo} from './nodeInfo';

@Injectable({
  providedIn: 'root'
})
export class NodesService {
  nodes: NodeInfo[] = [];

  constructor() { }
}
