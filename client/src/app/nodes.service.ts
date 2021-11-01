import {Injectable} from '@angular/core';
import {NodeInfo} from '../../../server/shared/nodeInfo';
import {RPCService} from "./rpc.service";

@Injectable({
  providedIn: 'root'
})
export class NodesService {
  nodes: NodeInfo[] = [];

  constructor(private rpc: RPCService) { }

  async getNodes(): Promise<NodeInfo[]> {

    const node$ = this.rpc.get('nodes');
    const sub = node$.subscribe(nodes => {
      console.log(nodes);
      this.nodes = nodes;
      sub.unsubscribe();
    });
    return node$.toPromise();
  }
}
