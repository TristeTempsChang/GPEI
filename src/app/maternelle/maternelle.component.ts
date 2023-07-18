import { Component, OnInit } from '@angular/core';
import { ecoleModel } from '../Model/ecole.model';

@Component({
  selector: 'app-maternelle',
  templateUrl: './maternelle.component.html',
  styleUrls: ['./maternelle.component.scss']
})
export class MaternelleComponent implements OnInit {

  maternelle!: ecoleModel[];
  dialog!: ecoleModel[];
  visible: boolean = false;

  ngOnInit(): void {
    this.maternelle = [
      {
        id: '1',
        title: 'École maternelle',
        name: 'École de l’Ormeteau',
        img: '../../assets/ecole1.jpg',
        director: 'Katia PAINDAVOINE',
        address: '9 rue de l’Ormeteau',
        tel: '01 64 57 04 99',
        email: '0910304L@ac-versailles.fr',
        elus: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.375904753925!2d2.437988041179617!3d48.56434873807167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5e786cbc341e1%3A0xa018db09ac318afc!2s9%20Rue%20de%20l&#39;Ormeteau%2C%2091540%20Mennecy!5e0!3m2!1sfr!2sfr!4v1689679544368!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      },
      {
        id: '2',
        title: 'École maternelle',
        name: 'le Clos Renault',
        img: '../../assets/clos-renault.jpg',
        director: 'Mélanie LEFEBVRE',
        address: '44 rue du Clos Renault',
        tel: '01 64 57 02 69',
        email: '0911482S@ac-versailles.fr',
        elus: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.375904753925!2d2.437988041179617!3d48.56434873807167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5e786cbc341e1%3A0xa018db09ac318afc!2s9%20Rue%20de%20l&#39;Ormeteau%2C%2091540%20Mennecy!5e0!3m2!1sfr!2sfr!4v1689679544368!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      },
      {
        id: '3',
        title: 'École maternelle',
        name: 'de la Jeannotte',
        img: '../../assets/jeanotte.jpg',
        director: 'Sophie JULIEN-JOLLY',
        address: '19 avenue de la Jeannotte',
        tel: '01 64 57 00 15',
        email: '0910806G@ac-versailles.fr',
        elus: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.149408996104!2d2.4408639757119435!3d48.56868712105131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5e79cb2d6aa3d%3A0x41acefb1966ed467!2s19%20Av.%20de%20la%20Jeannotte%2C%2091540%20Mennecy!5e0!3m2!1sfr!2sfr!4v1689680240712!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      },
      {
        id: '4',
        title: 'École maternelle',
        name: '« Les Myrtilles »',
        img: '../../assets/myrtilles.jpg',
        director: 'Marie-Noëlle CHEVALLIER',
        address: '10 place de l’Ecole des Myrtilles',
        tel: '01 64 99 82 38',
        email:'0911471E@ac-versailles.fr',
        elus:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2641.2856342508503!2d2.4254760757105363!3d48.54692052257616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5dd58e76c6df1%3A0x8ab7aebc652f0a57!2s10%20Pl.%20de%20l&#39;%C3%89cole%20des%20Myrtilles%2C%2091540%20Mennecy!5e0!3m2!1sfr!2sfr!4v1689680260887!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      }
    ];
  }

  showDialog(id: string) {
    this.visible = true;
    switch (id) {
      case "1":
        this.dialog = [
          {
            id: '1',
            title: 'École maternelle',
            name: 'École de l’Ormeteau',
            img: '../../assets/ecole1.jpg',
            director: 'Katia PAINDAVOINE',
            address: '9 rue de l’Ormeteau',
            tel: '01 64 57 04 99',
            email: '0910304L@ac-versailles.fr',
            elus: 'Aucun membre élu pour cet établissement...'
          }
        ];
        break;
      case "2":
        this.dialog = [
          {
            id: '2',
            title: 'École maternelle',
            name: 'le Clos Renault',
            img: '../../assets/clos-renault.jpg',
            director: 'Mélanie LEFEBVRE',
            address: '44 rue du Clos Renault',
            tel: '01 64 57 02 69',
            email: '0911482S@ac-versailles.fr',
            elus: 'Aucun membre élu pour cet établissement...'
          }
        ];
        break;
      case "3":
        this.dialog = [
          {
            id: '3',
            title: 'École maternelle',
            name: 'de la Jeannotte',
            img: '../../assets/jeanotte.jpg',
            director: 'Sophie JULIEN-JOLLY',
            address: '19 avenue de la Jeannotte',
            tel: '01 64 57 00 15',
            email: '0910806G@ac-versailles.fr',
            elus: '<ul><li>Mme ALPHONSI Estelle</li></ul>'
          }
        ];
        break;
      case "4":
        this.dialog = [
          {
            id: '4',
            title: 'École maternelle',
            name: '« Les Myrtilles »',
            img: '../../assets/myrtilles.jpg',
            director: 'Marie-Noëlle CHEVALLIER',
            address: '10 place de l’Ecole des Myrtilles',
            tel: '01 64 99 82 38',
            email:'0911471E@ac-versailles.fr',
            elus:'<ul><li>Mme TABORET Marina</li></ul>'
          }
        ];
        break;
      default:
        console.log('aïe');
    }
    console.log(id);
  }

}
