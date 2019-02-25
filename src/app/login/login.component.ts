import { Component , OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
	selector: 'login',
	templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{

	constructor(private auth : AuthService){

	}

	ngOnInit(){
		//this.auth.getUser().subscribe(console.log)
	}

	login(){
		console.log("click")
		this.auth.login().then(console.log)
	}


}