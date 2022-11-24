import { inject } from '@angular/core';
import {Routes} from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { AuthService } from '../shared/auth.service';
import { ExitGuard } from '../shared/exit.guard';
import {FlightBookingComponent} from './flight-booking.component';
import {FlightEditComponent} from './flight-edit/flight-edit.component';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import {PassengerSearchComponent} from './passenger-search/passenger-search.component';

export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: FlightBookingComponent,
    children: [
      {
        path: 'flight-search',
        component: FlightSearchComponent ,
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent,
        canActivate: []

      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent,
        canDeactivate: [ExitGuard]
      }
    ]
  }

]
