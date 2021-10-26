import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
// @todo remove this class or use it?
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({
      headers: req.headers
        // .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Request-Headers', 'x-requested-with')
        .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
        .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type,access-control-allow-origin')
        .set('Access-Control-Allow-Credentials', 'true')
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
    return next.handle(authReq);
  }
}
