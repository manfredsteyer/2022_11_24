import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from './tab.component';
import { TabbedPaneService } from './tabbed-pane.service';
import { UiConfig } from './ui-config';

@Component({
    selector: 'ui-tabbed-pane',
    providers: [TabbedPaneService],
    template: `
        <div>
            <!-- TODO: refactor into own component for reuse! -->
            <div class="links" *ngIf="navPos === 'top'">
                <a *ngFor="let t of tabs" (click)="activate(t)">{{t.title}}</a>
            </div>  

            <ng-content></ng-content>

            <div class="links" *ngIf="navPos === 'bottom'">
                <a *ngFor="let t of tabs" (click)="activate(t)">{{t.title}}</a>
            </div>    

        </div>

        <button (click)="next()">Next >></button>
    `,
    styles: [`
        .links a {
            color: black;
            border-bottom: 5px green solid;
            margin-right:15px;
            cursor: pointer;
        }

        .danger-zone .links a {
            color: red;
            font-weight: bold;
        }

    `]
})
export class TabbedPaneComponent implements AfterContentInit {
    
    constructor(
        private config: UiConfig,
        private service: TabbedPaneService) {
        this.service.move$.subscribe(step => {
            this.next(step);
        })
    }

    @ContentChildren(TabComponent, { descendants: true })
    tabList!: QueryList<TabComponent>;
    
    active = 0;

    get navPos(): 'top' | 'bottom' {
        return this.config.navigationPostion;
    }

    // tabs: TabComponent[] = [];
    get tabs(): TabComponent[] {
        return this.tabList.toArray();
    }

    next(step = 1): void {
        const next = (this.active + step) % this.tabs.length;  
        this.activate(this.tabs[next]);
    }

    ngAfterContentInit(): void {
        // After Angular called ngOnInit for ContentChildren
        if (this.tabs.length > 0) {
            this.activate(this.tabs[0]);
        }
    }

    register(tab: TabComponent): void {
        this.tabs.push(tab);
    }

    activate(tab: TabComponent): void {
        for(const cand of this.tabs) {
            cand.visible = (cand === tab);
        }
        this.active = this.tabs.indexOf(tab);
     }


}