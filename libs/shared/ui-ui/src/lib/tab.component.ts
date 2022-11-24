import { Component, Input, OnInit, Optional } from '@angular/core';
import { TabbedPaneComponent } from './tabbed-pane';
import { TabbedPaneService } from './tabbed-pane.service';

@Component({
    selector: 'ui-tab',
    template: `
        <div *ngIf="visible">
            <h2>{{title}}</h2>
            <ng-content select=".main"></ng-content>

            Mehr Informationen <a (click)="next()">hier</a>.

            <hr>
            <small>
                <ng-content select=".smallprint"></ng-content>
            </small>
        </div>
    `
})
export class TabComponent /* implements OnInit*/ {
    visible = true;
    @Input() title = '';

    constructor(private service: TabbedPaneService) {

    }

    next(): void {
        this.service.move$.next(1);
    }

    prev(): void {
        this.service.move$.next(-1);
    }

    // constructor(@Optional() private pane: TabbedPaneComponent) {
    // }

    // ngOnInit(): void {
    //     if (this.pane) {
    //         this.pane.register(this);
    //     }
    // }


}