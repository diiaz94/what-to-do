import {Component} from '@angular/core'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
//import { faCoffee } from '@font-awesome';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {

    constructor(public afAuth : AngularFireAuth, private router : Router){}

  logout(){
    this.afAuth.auth.signOut().then(()=> this.router.navigate(["/login"]));
  }
}
