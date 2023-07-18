import { Component, OnInit } from '@angular/core';
import { ecoleModel } from '../Model/ecole.model';

@Component({
  selector: 'app-lycee',
  templateUrl: './lycee.component.html',
  styleUrls: ['./lycee.component.scss']
})
export class LyceeComponent implements OnInit {

  visible: boolean = false;

  ngOnInit(): void {
    
  }

  showDialog(){
    this.visible = true;
  }

}
