import { Injectable } from '@angular/core';
import { AdherentModel } from '../Model/adherent.model';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, setDoc } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { Timestamp } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdherentService {

    constructor(private firestore: Firestore) {}

    
  getAdherent() {
    let $adherentRef = collection(this.firestore, "adherent");
    return collectionData($adherentRef, {idField: "id"}).pipe(
      map(adherents => {
        return adherents.map(adherent => {
          Object.keys(adherent).filter(key => adherent[key] instanceof Timestamp)
            .forEach(key => adherent[key] = adherent[key].toDate())
          return adherent;
        });
      })
    ) as Observable<AdherentModel[]>;
  }

  addadherent(adherent: AdherentModel) {
    let $adherentRef = collection(this.firestore, "adherent");
    return addDoc($adherentRef, adherent);
  }

  deleteAdherent(id: string) {
    let $adherentRef = doc(this.firestore, "adherent/" + id);
    return deleteDoc($adherentRef);
  }

  getAdherentById(id: string) {
    let $adherentRef = doc(this.firestore, "adherent/" + id);
    return docData($adherentRef, {idField:"id"}) as Observable<AdherentModel[]>
  }

  updateAdherent(id: string, posting: AdherentModel){
    let $adherentRef = doc(this.firestore, "adherent/" + id);
    return setDoc($adherentRef, posting);
  }
}