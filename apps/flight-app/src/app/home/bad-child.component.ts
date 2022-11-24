
import { Component, OnInit } from '@angular/core';
import { TabbedPaneService } from 'libs/shared/ui-ui/src/lib/tabbed-pane.service';

@Component({
    selector: 'app-bad-child',
    template: `<b>I'm so bad!</b>`
})

export class BadChildComponent  {
    constructor(private service: TabbedPaneService) { 
        setInterval(() => this.service.move$.next(1), 2000);
    }

}