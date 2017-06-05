import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'partial-layout',
  templateUrl: './partial-layout.component.html'
})
export class PartialLayoutComponent implements OnInit {
  
  constructor() {}

  public title: string = "";
  public disabled: boolean = false;
  public status: { isopen: boolean } = { isopen: false };

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {
    
  }

}
