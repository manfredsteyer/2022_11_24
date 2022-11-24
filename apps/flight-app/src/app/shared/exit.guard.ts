

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface WithExitWarning {
    mayExit(): Observable<boolean>;
}

@Injectable({providedIn: 'root'})
export class ExitGuard implements CanDeactivate<WithExitWarning> {
    canDeactivate(
        component: WithExitWarning,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        
        return component.mayExit();

    }
}