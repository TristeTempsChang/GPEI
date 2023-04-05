import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class loginService {
    username = 'test'
    password = 'mdp'

    

    login(username: string, password: string){
        const loginData = {
            pusername: username,
            ppassword: password
        }
    }
}