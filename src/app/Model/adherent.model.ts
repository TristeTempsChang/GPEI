import { enfant } from "./enfant.model";

export class AdherentModel {
    id: string;
    adress: string;
    choix: string;
    cpv: string;
    email: string;
    enfant: enfant[];
    engage: string;
    name: string;
    poste: string;
    tel: string;
    accepted: boolean
    
    constructor(id: string, adress: string, choix: string , cpv: string , email: string, enfant: enfant[], engage: string, name: string, poste: string, tel: string, accepted: boolean) {
      this.id = id;
      this.adress = adress;
      this.choix = choix;
      this.cpv = cpv;
      this.email = email;
      this.enfant = enfant;
      this.engage = engage;
      this.name = name;
      this.poste = poste;
      this.tel = tel;
      this.accepted = accepted;
    }
  }