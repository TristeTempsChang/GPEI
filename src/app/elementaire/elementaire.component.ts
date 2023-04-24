import { Component, OnInit } from '@angular/core';
import { ecoleModel } from '../Model/ecole.model';

@Component({
  selector: 'app-elementaire',
  templateUrl: './elementaire.component.html',
  styleUrls: ['./elementaire.component.scss']
})
export class ElementaireComponent implements OnInit {

  elementaire!: ecoleModel[];

  ngOnInit(): void {
    this.elementaire = [
      {
        title: 'École primaire',
        name: 'École de la Sablière',
        img: '../../assets/sabliere.jpg'
      },
      {
        title: 'École primaire',
        name: 'Colline de la Verville',
        img: '../../assets/download.jpg'
      },
      {
        title: 'École primaire',
        name: 'de la Jeannotte',
        img: '../../assets/jeannotte-elementaire.jpg'
      },
      {
        title: 'École primaire',
        name: '« Les Myrtilles »',
        img: '../../assets/myrtilles-elementaire.JPG'
      }
    ];
  }


}
