import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SocketIOConfig, SocketIOResponse, SocketIOQuery } from 'angular2-sails-socketio';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { PlacesModel } from 'app/model/places.model';


@Injectable()
export class PlacesService {
    constructor(
        private socketIOConfig: SocketIOConfig
    ) { };

    public getSuggestedRestaurants(query: SocketIOQuery): Observable<PlacesModel[]> {
        const request = (new PlacesModel(this.socketIOConfig)).restaurants(query);
        return Observable.from(request).map((response) => response)
            .catch((error) => {
                return Observable.throw(error);
            });
    }

    public getRestaurantDetails(id: string): Observable<PlacesModel[]> {
        const request = (new PlacesModel(this.socketIOConfig)).restaurantDetails(id);
        return Observable.from(request).map((response) => response)
            .catch((error) => {
                return Observable.throw(error);
            });
    }

    public getAutoSuggest(query: SocketIOQuery): Observable<PlacesModel[]> {
        const request = (new PlacesModel(this.socketIOConfig)).autoSuggest(query);
        return Observable.from(request).map((response) => response)
            .catch((error) => {
                return Observable.throw(error);
            });
    }
}
