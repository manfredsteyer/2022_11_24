import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FlightService} from '@flight-workspace/flight-lib';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;

  get flights() {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: { [id: number]: boolean } = {
    3: true,
    5: true
  };

  flights$ = this.flightService.flights$;

  constructor(
    private flightService: FlightService) {
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.flightService
      .load(this.from, this.to, this.urgent);
  }

  delay(): void {
    this.flightService.delay();
  }

}