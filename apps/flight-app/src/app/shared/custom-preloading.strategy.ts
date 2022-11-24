
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { delay, Observable, of, switchMap } from 'rxjs';

type LoadFn = () => Observable<unknown>;

@Injectable({ providedIn: 'root' })
export class CustomPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: LoadFn): Observable<unknown> {
        
        // return route.data && route.data['preload'] ? load() : of(null);
    
        return of(true).pipe(delay(7000), switchMap(() => load()));


    }
}
