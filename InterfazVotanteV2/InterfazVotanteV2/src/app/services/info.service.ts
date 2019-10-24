import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuthModule } from '@angular/fire/auth';

//Interfaz para candidatos de Presidentes
export interface TaskI {
  id?: string;
  presidente: string;
  vicepresidente: string;
  partido: string;
  URL: string;
  id_voto: Int16Array;
}

//Interfaz para candidatos de Alcaldes
export interface TaskAl {
  id?: string;
  alcalde: string;
  partido: string;
  URL: string;
  id_voto: Int16Array;
}

//Interfaz para candidatos de Diputados, esto incluye Distrito Electoral, Lista Nacional y Parlacen
export interface TaskDip {
  id?: string;
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
  private listaCollection: AngularFirestoreCollection<TaskDip>;
  private lista: Observable<TaskDip[]>;
  private distritoCollection: AngularFirestoreCollection<TaskDip>;
  private distrito: Observable<TaskDip[]>;
  private parlacenCollection: AngularFirestoreCollection<TaskDip>;
  private parlacen: Observable<TaskDip[]>;
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
    // alcaldes esta predterminado como Guatemala/Guatemala, refiriendose a dep/municipio
    this.alcaldesCollection = db.collection<TaskAl>('alcaldes/Guatemala/Guatemala');
    this.alcaldes = this.alcaldesCollection.snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );

    this.listaCollection = db.collection<TaskDip>('lista'); // Lista nacional
    this.lista = this.listaCollection.snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );

    this.distritoCollection = db.collection<TaskDip>('distrito/Guatemala/Guatemala'); // Distrito electoral
    this.distrito = this.distritoCollection.snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );

    this.parlacenCollection = db.collection<TaskDip>('parlacen'); // parlacen
    this.parlacen = this.parlacenCollection.snapshotChanges().pipe(
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
    return this.alcaldesCollection.doc<TaskAl>(id).valueChanges();
  }
  getListas(){
    return this.lista;
  }
  getLista(id: string){
    return this.listaCollection.doc<TaskDip>(id).valueChanges();
  }
  getDistritos(){
    return this.distrito;
  }
  getDistrito(id: string){
    return this.distritoCollection.doc<TaskDip>(id).valueChanges();
  }
  getParlacens(){
    return this.parlacen;
  }
  getParlacen(id: string){
    return this.parlacenCollection.doc<TaskDip>(id).valueChanges();
  }
}
