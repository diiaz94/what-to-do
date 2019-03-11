import {Component, OnInit} from '@angular/core';
import { ListService } from '../services/lists.service';

import { trigger, style,transition, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  animations:[
    trigger('enterState',[
      transition("* => *",[
        query(':enter', [
          style({transform: 'translateX(-100%)',opacity:0}),
          stagger(100,[
            animate(300,style({transform: 'translateX(0)',opacity:1}))
          ])
        ],{optional:true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit{
  public message: string;
  

  constructor(private listS : ListService){
    
  }

  ngOnInit(){
    this.listS.getLists().subscribe(lists =>{
      console.log(lists)
    })
  }

  

}
