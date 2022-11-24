import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {

    userName = '';

    login(userName: string): void {
        this.userName = userName;
    }

    logout(): void {
        this.userName = '';
    }

    isLoggedIn(): boolean {
        return this.userName !== '';
    }
}