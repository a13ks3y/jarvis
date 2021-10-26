import { Injectable } from '@angular/core';
import {RPCService} from './rpc.service';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private rpc: RPCService) { }

  captureDataUrlOnce(dataUrl: string, captureDateTime: Date): void {
    this.rpc.putFile('view/captureOnce', {
      dataUrl, createDateTime: captureDateTime
    });
  }
}
