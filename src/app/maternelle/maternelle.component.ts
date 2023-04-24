import { Component, OnInit } from '@angular/core';
import { ecoleModel } from '../Model/ecole.model';

@Component({
  selector: 'app-maternelle',
  templateUrl: './maternelle.component.html',
  styleUrls: ['./maternelle.component.scss']
})
export class MaternelleComponent implements OnInit {

  maternelle!: ecoleModel[];


  ngOnInit(): void {
    this.maternelle = [
      {
        title: 'École maternelle',
        name: 'École de l’Ormeteau',
        img: '../../assets/ecole1.jpg'
      },
      {
        title: 'École maternelle',
        name: 'le Clos Renault',
        img: '../../assets/clos-renault.jpg'
      },
      {
        title: 'École maternelle',
        name: 'de la Jeannotte',
        img: '../../assets/jeanotte.jpg'
      },
      {
        title: 'École maternelle',
        name: '« Les Myrtilles »',
        img: '../../assets/myrtilles.jpg'
      }
    ];
  }

}
