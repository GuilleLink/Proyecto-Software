import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuthModule } from '@angular/fire/auth';

export interface TaskI {
  id?: string;
  presidente: string;
  vicepresidente: string;
  partido: string;
  URL: string;
  id_voto: Int16Array;
}

export interface TaskAl {
  id?: string;
  alcalde: string;
  partido: string;
  URL: string;
  id_voto: Int16Array;
}


@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private candidatosCollection: AngularFirestoreCollection<TaskI>;
  private candidatos: Observable<TaskI[]>;
  private alcaldesCollection: AngularFirestoreCollection<TaskAl>;
  private alcaldes: Observable<TaskAl[]>;
  //private alcaldesCollection: AngularFirestoreCollection<TaskI>;
  //private alcaldes: Observable<TaskI[]>;
  //private distritosCollection: AngularFirestoreCollection<TaskI>;
  //private distritos: Observable<TaskI[]>;
  //private listaCollection: AngularFirestoreCollection<TaskI>;
  //private lista: Observable<TaskI[]>;
  //private parlacenCollection: AngularFirestoreCollection<TaskI>;
  //private parlacen: Observable<TaskI[]>;
//
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
    this.alcaldesCollection = db.collection<TaskAl>('alcaldes/Guatemala/Guatemala'); //alcaldes debe estar como predeterminado
    this.alcaldes = this.alcaldesCollection.snapshotChanges().pipe(
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
  getAlcaldes(){
    return this.alcaldes;
  }
  getAlcalde(id: string){
    return this.alcaldesCollection.doc<TaskAl>(id).valueChanges()
  }
}
