import { Component, OnInit, Input, ViewEncapsulation, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { PlacesService } from 'app/services/places.service';
import { PlacesModel } from 'app/model/places.model';
import { SocketIOConfig, SocketIOQuery } from 'angular2-sails-socketio';
import { GeolocationService } from 'app/core/utility/location.service';
import { Subscription } from 'rxjs/Rx';


@Component({
  templateUrl: './details.component.html',
  styleUrls: [
    './details.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  providers: [GeolocationService],
})

export class DetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  private suggestedRestaurants: Array<PlacesModel> = [];
  private rate = 4;
  private max = 5;
  private isReadOnly = true;
  private progressbarLoading = false;
  private paramsSubscription: Subscription;
  constructor(
    private router: Router,
    private socketIOConfig: SocketIOConfig,
    private geolocationService: GeolocationService,
    private route: ActivatedRoute
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
    this.paramsSubscription = this.route.params.subscribe(params => {
      if (params['id']) {
        const placesService = new PlacesService(this.socketIOConfig);
        placesService.getRestaurantDetails(params['id']).subscribe((restaurants) => {
          this.progressbarLoading = false;
          this.suggestedRestaurants = restaurants;
        }, (reason) => {
          this.progressbarLoading = false;
        });
      }
    });
  }

  ngAfterViewInit(): void {
    //   this.geolocationService.getCurrentLocation().subscribe((position) => {
    //     let location = "".concat(position.coords.latitude,',', position.coords.longitude);
    //     let query = new SocketIOQuery();
    //     query.whereEqualTo("location", location)
    //       .whereEqualTo("radius", "500")
    //       .setLimit(null)
    //       .setSkip(null);
    //     let placesService = new PlacesService(this.socketIOConfig);
    //     placesService.getSuggestedRestaurants(query).subscribe((restaurants) => {
    //       this.progressbarLoading = false;
    //       this.suggestedRestaurants = restaurants;
    //     }, (reason) => {
    //       this.progressbarLoading = false;
    //     });
    //   });
  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
