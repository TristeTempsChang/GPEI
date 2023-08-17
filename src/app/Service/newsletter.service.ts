import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, setDoc } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { Timestamp } from 'firebase/firestore';

interface newsletter {
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

    constructor(private firestore: Firestore) {}

    
  getEmail() {
    let $emailRef = collection(this.firestore, "EmailNewsletter");
    return collectionData($emailRef, {idField: "id"}).pipe(
      map(emails => {
        return emails.map(email => {
          Object.keys(email).filter(key => email[key] instanceof Timestamp)
            .forEach(key => email[key] = email[key].toDate())
          return email;
        });
      })
    ) as Observable<newsletter[]>;
  }

  addMail(email: newsletter) {
    let $emailRef = collection(this.firestore, "EmailNewsletter");
    return addDoc($emailRef, email);
  }

  deleteMail(id: string) {
    let $emailRef = doc(this.firestore, "EmailNewsletter/" + id);
    return deleteDoc($emailRef);
  }

  /* getAdherentById(id: string) {
    let $adherentRef = doc(this.firestore, "adherent/" + id);
    return docData($adherentRef, {idField:"id"}) as Observable<AdherentModel[]>
  }*/
}