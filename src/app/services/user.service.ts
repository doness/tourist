import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from "rxjs/Rx";
import { Router } from '@angular/router';
import { SocketIOConfig, SocketIOResponse } from "angular2-sails-socketio";
import { UserModel } from "app/model/user.model";


@Injectable()
export class UserService {

    constructor(
        private socketIOConfig: SocketIOConfig
    ) { };

    public signUpUser(registrationForm: UserModel) {
        return (new UserModel(this.socketIOConfig)).signUp(registrationForm);
    }
    public resetPassword(resetForm: UserModel) {
        return (new UserModel(this.socketIOConfig)).resetPassword(resetForm);
    }
    public newPassword(passwordForm: UserModel) {
        return (new UserModel(this.socketIOConfig)).newPassword(passwordForm);
    }
    
    public getUser(id) {
        var that = this;
        return (new UserModel(this.socketIOConfig)).findById(id);
    }
}