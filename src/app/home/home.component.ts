import {Component, OnInit} from '@angular/core';
import { ListService } from '../services/lists.service';
import { enterAnimation } from '../animations/animations';
import { IList } from '../structures/lists';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  animations:[enterAnimation]
})
export class HomeComponent implements OnInit{
  public message: string;

  public items : Observable<IList[]>;
  

  constructor(private listS : ListService){}

  ngOnInit(){
    this.items = this.listS.get();
  }  

}
