
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TabbedPaneService {
    
    move$ = new Subject<number>();
    
}