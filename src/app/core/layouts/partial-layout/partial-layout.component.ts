import { Component, OnInit } from '@angular/core';
import { SocketIOQuery, SocketIOConfig } from 'angular2-sails-socketio';
import { PlacesService } from 'app/services/places.service';
import { Observable } from 'rxjs/Rx';
import { TypeaheadMatch } from 'ngx-bootstrap';
import { PlacesModel } from 'app/model/places.model';
import { Router } from '@angular/router';

@Component({
  selector: 'partial-layout',
  templateUrl: './partial-layout.component.html'
})
export class PartialLayoutComponent implements OnInit {
  private dataSource: Observable<any>;
  public searchInput: string;
  public typeaheadLoading: boolean;
  public typeaheadNoResults: boolean;
  public title = '';
  public disabled = false;
  public status: { isopen: boolean } = { isopen: false };

  constructor(
    private router: Router,
    private socketIOConfig: SocketIOConfig
  ) {
    this.dataSource = Observable
      .create((observer: any) => {
        observer.next(this.searchInput);
      })
      .mergeMap((token: string) => this.getAutoSuggestions(token));
  }

  ngOnInit(): void {

  }

  public getAutoSuggestions(input: string): Observable<PlacesModel[]> {
    const query = new SocketIOQuery();
    query.whereEqualTo('input', input.concat(' restaurant'))
      .whereEqualTo('radius', '50000')
      .setLimit(null)
      .setSkip(null);
    const placesService = new PlacesService(this.socketIOConfig);
    return placesService.getAutoSuggest(query);
  }

  public resetSearchInput(): void {
    this.searchInput = '';
    this.router.navigate(['/']);
  }

  public changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }

  public changeTypeaheadNoResults(e: boolean): void {
    this.typeaheadNoResults = e;
  }

  public typeaheadOnSelect(e: TypeaheadMatch): void {
    // console.log('Selected value: ', e);
    this.router.navigate(['/details', e.item.place_id]);
  }

  public toggled(open: boolean): void {
    // console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

}
