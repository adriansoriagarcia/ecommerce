import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private angularFirestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage) { }

    public insertar(coleccion: any, datos: any) {
      return this.angularFirestore.collection(coleccion).add(datos);
    } 
  
    public consultar(coleccion: any) {
      return this.angularFirestore.collection(coleccion).snapshotChanges();
    }
  
    public borrar(coleccion: any, documentId: any) {
      return this.angularFirestore.collection(coleccion).doc(documentId).delete();
    }
  
    public actualizar(coleccion: any, documentId: any, datos: any) {
      return this.angularFirestore.collection(coleccion).doc(documentId).set(datos);
     }
  
     public consultarPorId(coleccion: any, documentId: any) {
      return this.angularFirestore.collection(coleccion).doc(documentId).snapshotChanges();
    }
}
