import { Component, HostBinding, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import { UserModel } from "app/model/user.model";
import { SocketIOConfig, SocketIOResponse } from "angular2-sails-socketio";

@Component({
  styleUrls: [
    './core/scss/bootstrap.scss',
    './core/fonts/glyphicon/css/glyphicons.css',
    './app.scss'
  ],
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private socketIOConfig: SocketIOConfig
    ) {
  }

  ngOnInit() {
    
  }

}
