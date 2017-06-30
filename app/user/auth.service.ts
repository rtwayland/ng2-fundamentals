import { Injectable } from '@angular/core';
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
	currentUser: IUser

	constructor() {
	}

	loginUser(userName: string, password: string) {
		this.currentUser = {
			id: 1,
			userName: userName,
			firstName: 'John',
			lastName: 'Johnson'
		}
	}

	isAuthenticated() {
		return !!this.currentUser
	}

	updateCurrentUser(first: string, last: string) {
		this.currentUser.firstName = first;
		this.currentUser.lastName = last;
	}
}