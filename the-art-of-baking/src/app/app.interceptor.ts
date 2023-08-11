import { Injectable, Provider } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";
import { UserService } from "./user/user.service";

const { apiUrl } = environment
@Injectable()
export class AppInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token = this.userService.getToken();

        if (req.url.startsWith('/users')) {
            //     req = req.clone({
            //    url: req.url.replace('/users', apiUrl)
            //   });
            if (token) {
                req = req.clone({
                    headers: req.headers.set('X-Authorization', token),
                    withCredentials: true
                });
            }
        }
        return next.handle(req);
    }
}

export const appInterceptorProvider: Provider = {
    multi: true,
    useClass: AppInterceptor,
    provide: HTTP_INTERCEPTORS,
}