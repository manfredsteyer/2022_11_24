
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    
    constructor(
        private router: Router,
        private authService: AuthService) {
    }

    canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.authService.userName) {
            return true;
        }
        return this.router.createUrlTree(['/home', {needsLogin: true}]);
    }
    
}