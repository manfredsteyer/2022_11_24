import { FlightCancellingModule } from './flight-booking/flight-cancelling/flight-cancelling.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { FlightLibModule } from '@flight-workspace/flight-lib';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomPreloadingStrategy } from './shared/custom-preloading.strategy';
import { SharedUiUiModule, UiConfig } from '@flight-workspace/shared/ui-ui';
import { BadChildComponent } from './home/bad-child.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    // FlightBookingModule,
    
    SharedUiUiModule.forRoot({
      navigationPostion: 'top'
    }),

    BrowserAnimationsModule,
    FlightCancellingModule,

    FlightLibModule.forRoot(),
    SharedModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES, {
      preloadingStrategy: CustomPreloadingStrategy
    }),
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BasketComponent,
    BadChildComponent,
  ],
  // providers: [{
  //   provide: UiConfig,
  //   useValue: { navigationPostion: 'bottom' }
  // }],
  bootstrap: [AppComponent]
})
export class AppModule {}


// bootstrapApplication(AppComponent, {
//    providers: [ provideUi(config), provideHttpClient() ]
// })