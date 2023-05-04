import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from './models/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authUrl = 'https://carsinfoapi.azurewebsites.net/api/auth';
  private readonly jwtHelper = new JwtHelperService();

  constructor(private readonly http: HttpClient) { }

  login(username: string, password: string): Observable<LoginResponse> {
    const loginUrl = `${this.authUrl}/login`;
    const body = {
      username: username,
      password: password
    };
    return this.http.post<LoginResponse>(loginUrl, body).pipe(
      tap((result) => {
        localStorage.setItem('access_token', result.token);
        const decodedToken = this.jwtHelper.decodeToken(result.token);
        const username = decodedToken['name'];
        const id = decodedToken['nameid'];
        localStorage.setItem('username', username);
        localStorage.setItem('id', id);
        console.log(result.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }
}
