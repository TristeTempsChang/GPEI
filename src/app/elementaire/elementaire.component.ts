import { Component, OnInit } from '@angular/core';
import { ecoleModel } from '../Model/ecole.model';

@Component({
  selector: 'app-elementaire',
  templateUrl: './elementaire.component.html',
  styleUrls: ['./elementaire.component.scss']
})
export class ElementaireComponent implements OnInit {

  elementaire!: ecoleModel[];
  dialog!: ecoleModel[];
  visible: boolean = false;

  ngOnInit(): void {
    this.elementaire = [
      {
        id: '1',
        title: 'École primaire',
        name: 'École de la Sablière',
        img: '../../assets/sabliere.jpg',
        director: '',
        address: '',
        tel: ' ',
        email:'',
        elus:''
      },
      {
        id: '2',
        title: 'École primaire',
        name: 'Colline de la Verville',
        img: '../../assets/download.jpg',
        director:'',
        address:'',
        tel:'',
        email:'',
        elus:''
      },
      {
        id: '3',
        title: 'École primaire',
        name: 'de la Jeannotte',
        img: '../../assets/jeannotte-elementaire.jpg',
        director:'',
        address:'',
        tel:'',
        email:'',
        elus:''
      },
      {
        id: '4',
        title: 'École primaire',
        name: '« Les Myrtilles »',
        img: '../../assets/myrtilles-elementaire.JPG',
        director:'',
        address:'',
        tel:'',
        email:'',
        elus:''
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
            title: 'École primaire',
            name: 'École de la Sablière',
            img: '../../assets/sabliere.jpg',
            director: 'Katia PAINDAVOINE',
            address: '16 rue de la Sablière',
            tel: '01 64 57 02 12',
            email:'0910304L@ac-versailles.fr',
            elus:'Aucun membre élu pour cet établissement...'
          }
        ];
        break;
      case "2":
        this.dialog = [
          {
            id: '2',
            title: 'École primaire',
            name: 'Colline de la Verville',
            img: '../../assets/download.jpg',
            director:'Angélique BERAUD',
            address:'4 Place de l’École de la Verville',
            tel:'01 64 57 02 12',
            email:'0910305M@ac-versailles.fr',
            elus:'Aucun membre élu pour cet établissement...'
          }
        ];
        break;
      case "3":
        this.dialog = [
          {
            id: '3',
            title: 'École primaire',
            name: 'de la Jeannotte',
            img: '../../assets/jeannotte-elementaire.jpg',
            director:'Sophie JULIEN-JOLLY',
            address:'19 avenue de la Jeannotte',
            tel:'01 64 57 00 15',
            email:'0910806G@ac-versailles.fr',
            elus:'<ul><li>Mme HAMIMED Nasserine</li></ul>'
          }
        ];
        break;
      case "4":
        this.dialog = [
          {
            id: '4',
            title: 'École primaire',
            name: '« Les Myrtilles »',
            img: '../../assets/myrtilles-elementaire.JPG',
            director:'Sandra LIORET',
            address:'2 place de l’Ecole des Myrtilles',
            tel:'01 64 99 82 54',
            email:'0911475J@ac-versailles.fr',
            elus:'<ul><li>Mme QUINQUET Aurélie</li></ul>'
          }
        ];
        break;
      default:
        console.log('aïe');
    }
    console.log(id);
  }


}
