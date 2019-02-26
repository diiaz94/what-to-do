import { Component, OnInit } from "@angular/core";
import { IList } from "../../structures/lists";
import { ListService } from "../../services/lists.service";


@Component({
    selector: 'creator',
    templateUrl: 'list.creator.component.html'
})
export class ListCreatorComponent implements OnInit{

    public list: IList = {title: ''};


    constructor(private listS : ListService){}

    ngOnInit(){

    }

    save(){0
        this.listS.add(this.list).then((result)=>{
            this.list.title = '';
        });
    }

}