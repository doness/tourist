import { Component, OnInit, Input, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { PlacesService } from 'app/services/places.service';
import { PlacesModel } from 'app/model/places.model';
import { SocketIOConfig, SocketIOQuery } from 'angular2-sails-socketio';
import { GeolocationService } from 'app/core/utility/location.service';


@Component({
  templateUrl: './home.component.html',
  styleUrls: [
    './home.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  providers: [GeolocationService],
})

export class HomeComponent implements OnInit, AfterViewInit {
  private suggestedRestaurants: Array<PlacesModel> = [];
  private rate = 4;
  private max = 5;
  private isReadOnly = true;
  private progressbarLoading = false;
  private locationSettingsError = false;

  constructor(
    private router: Router,
    private socketIOConfig: SocketIOConfig,
    private geolocationService: GeolocationService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.progressbarLoading = true;
      } else if (event instanceof NavigationEnd) {
        // this.progressbarLoading = false;
      }
    });
  }

  ngOnInit(): void {
    this.progressbarLoading = true;
  }

  ngAfterViewInit(): void {
    this.geolocationService.getCurrentLocation().subscribe((position) => {
      const location = ''.concat(position.coords.latitude, ',', position.coords.longitude);
      const query = new SocketIOQuery();
      query.whereEqualTo('location', location)
        .whereEqualTo('radius', '500')
        .setLimit(null)
        .setSkip(null);
      const placesService = new PlacesService(this.socketIOConfig);
      placesService.getSuggestedRestaurants(query).subscribe((restaurants) => {
        this.progressbarLoading = false;
        this.suggestedRestaurants = restaurants;
      }, (reason) => {
        this.progressbarLoading = false;
      });
    }, (reason) => {
      this.locationSettingsError = true;
    });
  }

}
