import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})
export class ServicoService {
 
  constructor(private firestore: AngularFirestore) { }
 
  create(record, colecao: string) {
    return this.firestore.collection(colecao).add(record);
  }
 
  read(colecao: string) {
    return this.firestore.collection(colecao).snapshotChanges();
  }
 
  update(recordID, record, colecao: string){
    this.firestore.doc(colecao+'/' + recordID).update(record);
  }
 
  delete(record_id, colecao: string) {
    this.firestore.doc(colecao+'/' + record_id).delete();
  }
 
}
