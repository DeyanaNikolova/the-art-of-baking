// import { Injectable, Provider } from '@angular/core';
// import {
//   HTTP_INTERCEPTORS,
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment.development';
// import { UserService } from './user/user.service';
// import { Router } from '@angular/router';

// const { apiUrl } = environment;
// @Injectable()
// export class AppInterceptor implements HttpInterceptor {
//   constructor(private userService: UserService, private router: Router) {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     //  const token = this.userService.getToken();


//     if (req.url.startsWith('/')) {
//       req = req.clone({
//         url: req.url.replace('/', apiUrl),
//         withCredentials: true,
//       });
//     //  if (token) {
//     //     req = req.clone({
//     //       headers: req.headers.set('X-Authorization', token),
//     //       withCredentials: true,
//     //     });
//     //   }
//     } 

//     return next.handle(req);
//   }
// }

// export const appInterceptorProvider: Provider = {
//   multi: true,
//   useClass: AppInterceptor,
//   provide: HTTP_INTERCEPTORS,
// };
