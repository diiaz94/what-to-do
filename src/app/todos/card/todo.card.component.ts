import { Component, OnInit, Input } from "@angular/core";
import { ITodo, TStatus } from "../../structures/todos";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { TodoService } from "../../services/todos.service";

import * as moment from 'moment';
moment().format();

moment.locale('es');

@Component({
    selector: 'todo-card',
    templateUrl: 'todo.card.component.html',
    animations:[
        trigger('statusAnimation',[
            state('0,void',style({
                transform:'translateX(0)',
                opacity: 1
            })),
            state('1',style({
                transform:'translateX(-100%)',
                opacity: 0
            })),
            transition('0 <=> 1',[
                animate(200,style({transform:'translateX(0)',opacity:1})),
                animate(200)
            ])
        ]),
        trigger('pressAnimation',[
            state('up,void',style({
                transform:'translateX(0)'
            })),
            state('down',style({
                transform:'translateX(-100px)'
            })),
            transition('up <=> down',[
                animate(100,style({transform:'translateX(0)'})),
                animate(100)
            ])
        ])
    ]
})

export class TodoCardComponent implements OnInit{
    @Input()  todo : ITodo;
    @Input()  listId : string;

    public press : string = 'up';

    public moment : any = moment;

    constructor(private todoS : TodoService){

    }

    ngOnInit(){}

    completed(){
        this.todo.status = TStatus.Completed;
    
        setTimeout(()=>this.todoS.update(this.listId,this.todo),300);

    }
}