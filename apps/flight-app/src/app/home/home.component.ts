/* eslint-disable no-restricted-syntax */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  expertMode = false;
  needsLogin$: Observable<boolean> | undefined;
  _userName = '';

  agb = false;

  get userName(): string {
    return this.authService.userName;
  }

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute) {}

  changed($event: CustomEvent): void {
    console.debug('$event.detail ', $event.detail);

    this.expertMode = $event.detail;
  }

  ngOnInit() {
    this.needsLogin$ = this.route.params.pipe(
      map((params) => !!params['needsLogin'])
    );
  }

  login(): void {
    this.authService.login('Max');
  }

  logout(): void {
    this.authService.logout();
  }
}
