import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy, CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { Ng2BootstrapModule, RatingModule, TypeaheadModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';


import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from 'app/core/layouts/full-layout/full-layout.component';


// Services
import { SocketIOModule, SocketIOConfig } from 'angular2-sails-socketio';
import { AppSocketIOConfig } from 'app/app.config';
import { RouterModule, Router } from '@angular/router';
import { AppLoadingComponent } from 'app/core/shared/app-loading/app-loading.component';
import { PartialLayoutComponent } from 'app/core/layouts/partial-layout/partial-layout.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    JsonpModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    Ng2BootstrapModule.forRoot(),
    SocketIOModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AppLoadingComponent,
    FullLayoutComponent,
    PartialLayoutComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {
      provide: SocketIOConfig,
      useClass: AppSocketIOConfig,
      deps: [Router]
    }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
