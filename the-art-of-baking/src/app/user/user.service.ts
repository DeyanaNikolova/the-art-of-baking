import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../types/user';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined;
  //  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }
  subscription: Subscription;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token') || '';
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  getToken() {
    return localStorage.getItem('token') || '';
  }

  authHeaders() {
    const options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'X-Authorization': this.getToken(),
      }),
    };
    return options;
  }

  register(email: string, username: string, password: string, repass: string) {
    const { apiUrl } = environment;
    return this.http
      .post<User>(`${apiUrl}/users/register`, {
        email,
        username,
        password,
        repass,
      })
      .pipe(
        tap((user) => {
          localStorage.setItem('token', user.accessToken);
          this.user$$.next(user);
        })
      );
  }

  login(email: string, password: string) {
    const { apiUrl } = environment;
    return this.http
      .post<User>(`${apiUrl}/users/login`, { email, password })
      .pipe(
        tap((user) => {
          localStorage.setItem('token', user.accessToken);
          this.user$$.next(user);
        })
      );
  }

  getUserDetails() {
    // const token = localStorage.getItem('token');

    const { apiUrl } = environment;
    const id = this.user?._id;

    return this.http
      .get<User>(`${apiUrl}/users/${id}`)
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    const { apiUrl } = environment;
    // const headers = new HttpHeaders({
    //   'Content-type': 'application/json',
    //   'X-Authorization': this.getToken(),
    // });
    // const options = { headers: headers };
    return this.http.get<any>(`${apiUrl}/users/logout`, this.authHeaders()).pipe(
      tap(() => {
        localStorage.removeItem('token');
        this.user$$.next(undefined);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
