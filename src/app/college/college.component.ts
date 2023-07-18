import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {

  visible: boolean = false;

  ngOnInit(): void {
    
  }

  showDialog(){
    this.visible = true;
  }

}
