
import { SocketIOConfig } from 'angular2-sails-socketio';
import { Router } from '@angular/router';

// TODO: The get

export class AppSocketIOConfig extends SocketIOConfig {
    constructor(
        private router: Router
    ) {
        super();
        this.setWebsocketUrl('ws://localhost:1337');
        // this.setWebsocketUrl('wss://paytron.com.ng:8081');
        this.setPrefix('api');
        this.setAutoConnect(true);
        this.setHeaders({
            Authorization: localStorage.getItem('token')
        });
        this.setSocketInterceptor((response) => {
            if (response.getCode() == 'E_UNAUTHORIZED') {
                localStorage.removeItem('token');
                localStorage.removeItem('uid');
                this.router.navigate(['login']);
                console.log('E_UNAUTHORIZED');
            }
        });
    }
    getHeaders() {
        return {
            Authorization: localStorage.getItem('token')
        };
    }
}
