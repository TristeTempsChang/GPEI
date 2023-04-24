export class loginModel {
    identifiant: string;
    password: string;
    
    constructor(identifiant: string, password: string) {
      this.identifiant = identifiant;
      this.password = password;
    }
}