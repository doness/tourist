import { Component, OnInit, Input, ViewEncapsulation, AfterViewInit, HostBinding } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

declare var $;

@Component({
    selector: 'app-loading',
    templateUrl: './app-loading.component.html',
    styleUrls: [
        './app-loading.scss'
    ],
    encapsulation: ViewEncapsulation.None
})

export class AppLoadingComponent {
    @HostBinding('class.show')
    private progressbarLoading = false;
    constructor(
        private router: Router
    ) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.progressbarLoading = true;
            } else if (event instanceof NavigationEnd) {
                this.progressbarLoading = false;
            }
        });
    }
}
