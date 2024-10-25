import { Injectable } from '@angular/core';
import * as moment from 'moment'; // Import moment.js

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenExpiration: number | null = null;

  constructor() {}

  storeToken(token: string, expirationTime: number): void {
    localStorage.setItem('token', token);
    this.tokenExpiration = expirationTime;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token || !this.tokenExpiration) {
      return true;
    }
    const now = moment();
    const expiration = moment(this.tokenExpiration);
    return now.isAfter(expiration);
  }
}
