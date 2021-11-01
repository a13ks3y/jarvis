import { Injectable } from '@angular/core';
import TdApi from './td_api';
import TdClient from './../assets/tdweb.js';

@Injectable({
  providedIn: 'root'
})
export class TgService {
  protected static tdClient: any;
  protected static updateHandlers: {[key: string]: ((update: any) => void)[]} = {};

  /**
   * Creates the instance of TdWeb
   */
  async init(): Promise<any> {
    TgService.tdClient = new TdClient({
      useDatabase: false,
      instanceName: `${this.getCurrentSessionId()}production`, // e.g. ?account=1&test=1 = '1test' or ?account=1&test=0 = '1production'
      onUpdate(update: TdApi.td_Update): void {
        console.log('Update: ', update);
        if (TgService.updateHandlers[update['@type']]){
          TgService.updateHandlers[update['@type']].forEach(h => h(update));
        }
      }
    });
    return await this.sendQuery({'@type': 'getAuthorizationState'}); // It both starts TDLib and returns the authorization state
  }

  getCurrentSessionId(): string {
    return new URL(window.location.href).searchParams.get('account') || '1';
  }

  /**
   * Send a request to the TdLib instance
   * If the query contains an `@extra` field, the same field will be added to the result
   * @param query The request to send. Consult TdLib & JSON interface API for help.
   * @returns The result of the request
   */
  sendQuery(query: TdApi.TdFunction): Promise<TdApi.TdFunctionReturn<any> | TdApi.td_Error> {
    if (query['@type'] !== 'setTdlibParameters') {
      console.log('Query: ', query);
    }
    return new Promise((resolve, reject) => {
      TgService.tdClient.send(query).then((result: TdApi.TdFunctionReturn<any>) => {
          console.log('Query result: ', result);
          resolve(result);
        }, (error: TdApi.td_Error) => {
          console.warn('Query failed: ', error);
          reject(error);
        }
      );
    });
  }
}


