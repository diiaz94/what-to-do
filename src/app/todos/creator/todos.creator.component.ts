import { Component, OnInit, Input } from '@angular/core';
import { ITodo, TStatus } from '../../structures/todos';
import { TodoService } from '../../services/todos.service';

import { trigger, state, style,transition, animate } from '@angular/animations';

@Component({
    selector: 'todo-creator',
    templateUrl: 'todos.creator.component.html',
    animations:[
        trigger('openClose',[
            state('collapsed, void', style({height:'0px'})),
            state('expanded', style({height:'*'})),
            transition('collapsed <=> expanded',[animate(300,style({height:'*'})),animate(300)])            
        ])
    ]
})

export class TodoCreatorComponent implements OnInit{

    @Input() id : string;

    public formState : string = 'collapsed';

    public todo : ITodo = {content: '', status: TStatus.Created};

    constructor(private todoS : TodoService){

    }
    ngOnInit(){}

    save(){
        this.todoS.add(this.id,this.todo);
    }
    label(){
        return (this.formState == 'collapsed') ? 'Agregar nuevo pendiente' : 'Ocultar formulario';
        
    }
    icon(){
        return (this.formState == 'collapsed') ? 'fa-plus' : 'fa-caret-up';
        
    }
    toggleForm(){
        this.formState = (this.formState == 'collapsed') ? 'expanded' : 'collapsed';

    }
}