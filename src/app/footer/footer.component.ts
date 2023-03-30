import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerDate!: Date;

  constructor() { }

  ngOnInit(): void {
    this.footerDate = new Date();
  }

}
