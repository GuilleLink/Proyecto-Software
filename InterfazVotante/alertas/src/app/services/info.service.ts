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
  private alcaldesCollection: AngularFirestoreCollection<TaskI>;
  private alcaldes: Observable<TaskI[]>;
  private distritosCollection: AngularFirestoreCollection<TaskI>;
  private distritos: Observable<TaskI[]>;
  private listaCollection: AngularFirestoreCollection<TaskI>;
  private lista: Observable<TaskI[]>;
  private parlacenCollection: AngularFirestoreCollection<TaskI>;
  private parlacen: Observable<TaskI[]>;


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
    this.alcaldesCollection = db.collection<TaskI>('alcaldes');
    this.alcaldes = this.alcaldesCollection.snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
    this.distritosCollection = db.collection<TaskI>('distrito');
    this.distritos = this.distritosCollection.snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
    this.listaCollection = db.collection<TaskI>('lista');
    this.lista = this.listaCollection.snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
    this.parlacenCollection = db.collection<TaskI>('parlacen');
    this.parlacen = this.listaCollection.snapshotChanges().pipe(
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
    return this.alcaldesCollection.doc<TaskI>(id).valueChanges();
  }
  getDistritos(){
    return this.distritos;
  }
  getDistrito(id: string){
    return this.distritosCollection.doc<TaskI>(id).valueChanges();
  }
  getlistas(){
    return this.lista;
  }
  getlista(id: string){
    return this.listaCollection.doc<TaskI>(id).valueChanges();
  }
  getparlacens(){
    return this.parlacen;
  }
  getparlacen(id: string){
    return this.parlacenCollection.doc<TaskI>(id).valueChanges();
  }

}
