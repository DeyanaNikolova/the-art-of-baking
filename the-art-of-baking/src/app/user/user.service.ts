import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }
  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user;
    })
  }

  login(email: string, password: string) {
    const { apiUrl } = environment;
    return this.http.post<User>(`${apiUrl}/users/login`, { email, password })
    .pipe(tap(user=> this.user$$.next(user)));
  }

  logout(){
  const  { apiUrl } = environment;
  return this.http.post<User>(`${apiUrl}/users/logout`, {})
  .pipe(tap(()=> this.user$$.next(undefined)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
