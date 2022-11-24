import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { WithExitWarning } from '../../shared/exit.guard';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
})
export class FlightEditComponent implements OnInit, WithExitWarning {
  id: string | undefined;
  showDetails: string | undefined;
  showWarning = false;

  observer: Observer<boolean> | undefined;

  constructor(private route: ActivatedRoute) {}

  mayExit(): Observable<boolean> {
    this.showWarning = true;
    return new Observable<boolean>(observer => {
      this.observer = observer;
    });
  }

  decide(decision: boolean): void {
    this.showWarning = false;
    this.observer?.next(decision);
  }

  ngOnInit() {
    this.route.params.subscribe((p) => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });
  }

}
