
import { SocketIOModel, METHOD } from "angular2-sails-socketio";
import { Endpoint } from "angular2-sails-socketio/src/socketio.decorator";

@Endpoint("User")
export class UserModel extends SocketIOModel {
    public firstname: string = '';
    public lastname: string = '';
    public phone : string = '';
    public signUp(registrationForm: any): Promise<any> {
        return this.action('signup', METHOD.POST, registrationForm)
    };
    public resetPassword(resetForm: UserModel): Promise<any> {
        return this.action('resetPasswordLink', METHOD.POST, resetForm)
    };
    public newPassword(passwordForm: any): Promise<any> {
        return this.action('newPassword', METHOD.POST, passwordForm)
    };
    public test(): Promise<any> {
        return this.action('test', METHOD.POST, {})
    };
}