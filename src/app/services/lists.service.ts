import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { AuthService } from "./auth.service";

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction } from "angularfire2/firestore";

import { IList } from "../structures/lists";

import * as firebase from 'firebase/app';

@Injectable()
export class ListService{
    public uid : string;
    public listsCollection : AngularFirestoreCollection<IList>;
    public lists : Observable<IList[]>; 
    private ref : Observable<DocumentChangeAction<IList>[]>;

    constructor(public afs : AngularFirestore, private auth : AuthService){
        this.auth.getUser().subscribe(user =>{
            this.uid = user.uid;

            if(this.uid) this.setCollection();

        });

    }


    getLists(){
        return this.lists;
    }

   setCollection() {

    this.listsCollection = this.afs.collection('users').doc(this.uid).collection<IList>('lists');

    this.lists = this.listsCollection.snapshotChanges().map(actions=>{
        return actions.map(item=>{
            const data = item.payload.doc.data() as IList;
            const id = item.payload.doc.id;
            return {...data, id};
        });
    });

    this.ref = this.listsCollection.snapshotChanges();

   }

    add(list: IList): Promise<any>{
        if(!this.listsCollection) throw Error('Set a collection before trying to add a new document');

        const createdAt = firebase.firestore.FieldValue.serverTimestamp();

        list.createdAt = createdAt;

        return this.listsCollection.add(list);
    }

    get():  Observable<IList[]>{
        return this.ref.map(actions=>{
            return actions.map(item =>{
                const data = item.payload.doc.data() as IList;
                const id = item.payload.doc.id;

                return {...data,id};
            })
        });

    }

}