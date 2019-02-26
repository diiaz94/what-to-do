import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';

import { IUser } from '../structures/users';
import { UserService } from './user.service';

import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';

@Injectable()
export class  AuthService{

	constructor(private afAuth : AngularFireAuth, private userS : UserService){}

	getUser() : Observable<IUser>{
		return this.afAuth.authState
			.take(1)
			.filter(user => !!user)
			.map((user: firebase.User)=>{
			return user as IUser;
		});
	}

	login() : Promise<void>{
		return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
			.then(result => {
				return this.userS.add({uid:result.user.uid,email: result.user.email})
			}).catch(console.log)
	}
}