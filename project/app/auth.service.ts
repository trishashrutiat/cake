
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USERNAME_KEY = 'username';

  constructor() {}

  login(username: string) {
    localStorage.setItem(this.USERNAME_KEY, username);
  }

  logout() {
    localStorage.removeItem(this.USERNAME_KEY);
  }

  getUsername(): string | null {
    return localStorage.getItem(this.USERNAME_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getUsername();
  }
}
