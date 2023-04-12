import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { loginModel } from '../Model/login.model';

@Injectable({
  providedIn: 'root'
})
export class loginService {

    private authenticate!: boolean;

    constructor(private firestore: Firestore){

    }

    getLogin(){
        let $loginRef = collection(this.firestore, "utilisateur");
        return collectionData($loginRef) as Observable<loginModel[]>;
    }

    setAuth(authenticate: boolean) {
        this.authenticate = authenticate;
    }

    getAuth() {
        return this.authenticate;
    }
}