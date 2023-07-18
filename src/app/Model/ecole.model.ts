export class ecoleModel {
    id: string;
    title: string;
    name: string;
    img: string;
    director: string;
    address: string;
    tel: string;
    email: string;
    elus: string;
    
    constructor(title: string, name: string, img: string, id: string, director: string, address: string, tel: string, email: string, elus: string) {
      this.id = id;
      this.title = title;
      this.name = name;
      this.img = img;
      this.director = director;
      this.address = address;
      this.tel = tel;
      this.email = email;
      this.elus = elus;
    }
}