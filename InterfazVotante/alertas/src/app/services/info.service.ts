import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TaskI} from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private candidatosCollection: AngularFirestoreCollection<TaskI>;
  private candidatos: Observable<TaskI[]>;

  constructor(db: AngularFirestore) { 
    this.candidatosCollection = db.collection<TaskI>('candidatos');
    this.candidatos = this.candidatosCollection.snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }
  getCandidatos(){
    return this.candidatos;
  }
  getCandidato(id: string){
    return this.candidatosCollection.doc<TaskI>(id).valueChanges();
  }

}
