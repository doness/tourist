import { Component, OnInit, Input, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { PlacesService } from "app/services/places.service";
import { PlacesModel } from "app/model/places.model";
import { SocketIOConfig, SocketIOQuery } from "angular2-sails-socketio";
import { GeolocationService } from "app/core/utility/location.service";


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
  private rate: number = 4;
  private max: number = 5;
  private isReadOnly: boolean = true;
  private progressbarLoading: boolean = false;
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
      let location = "".concat(position.coords.latitude,',', position.coords.longitude);
      let query = new SocketIOQuery();
      query.whereEqualTo("location", location)
        .whereEqualTo("radius", "500")
        .setLimit(null)
        .setSkip(null);
      let placesService = new PlacesService(this.socketIOConfig);
      placesService.getSuggestedRestaurants(query).subscribe((restaurants) => {
        this.progressbarLoading = false;
        this.suggestedRestaurants = restaurants;
      }, (reason) => {
        this.progressbarLoading = false;
      });
    });
  }

}
