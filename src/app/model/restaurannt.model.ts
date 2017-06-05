
import { SocketIOModel, METHOD } from "angular2-sails-socketio";
import { Endpoint } from "angular2-sails-socketio/src/socketio.decorator";

@Endpoint("Restaurant")
export class RestaurantModel extends SocketIOModel {
    public firstname: string = '';
    public lastname: string = '';
    public phone : string = '';
}