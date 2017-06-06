import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'full-layout',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
  public title = '';
  public disabled = false;
  public status: { isopen: boolean } = { isopen: false };

  constructor() { }

  ngOnInit(): void {

  }

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

}
