
import { SocketIOModel, SocketIOQuery, METHOD } from "angular2-sails-socketio";
import { Endpoint } from "angular2-sails-socketio/src/socketio.decorator";

@Endpoint("Places")
export class PlacesModel extends SocketIOModel {
    public restaurants(query: SocketIOQuery): Promise<any> {
        return this.action('restaurants', METHOD.GET, query);
    }
    public restaurantDetails(id: string): Promise<any> {
        return this.action('details/' + id, METHOD.GET, null);
    }
}