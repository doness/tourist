import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class GeolocationService {
    constructor(http: Http) { }

    getCurrentLocation(): Observable<any> {
        return Observable.create((observer) => {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.watchPosition((position) => {
                    observer.next(position);
                },(error)=>{
                    observer.error("Unsupported Browser");
                });
            }
        });
    }

}