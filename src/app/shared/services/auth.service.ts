import {Injectable} from '@angular/core';
import {FbAuthResponse, User} from '../../auth/auth-models';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, Subject, tap} from 'rxjs';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https:identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
  apiKey = environment.apiKey;
  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  get token(): string {
    const expDate = new Date(localStorage.getItem('fb-token-exp'));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token');
  }

  get userId(): string {
    const expDate = new Date(localStorage.getItem('fb-token-exp'));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('userId');
  }

  get userEmail(): string {
    const expDate = new Date(localStorage.getItem('fb-token-exp'));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('userEmail');
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true;
    return this.http.post(this.url + this.apiKey, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );

  }


  private handleError(error: HttpErrorResponse) {
    const {message} = error.error.error;

    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('Неверный email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Неверный пароль');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Пользователь не найден');
        break;
      case 'EMAIL_EXISTS':
        this.error$.next('Пользователь с таким email уже зарегистрирован');
        break;

    }
  }

  logout() {
    this.setToken(null);
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(response: FbAuthResponse | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
      localStorage.setItem('userId', response.localId);
      localStorage.setItem('userEmail', response.email);
    } else localStorage.clear();
  }
}
