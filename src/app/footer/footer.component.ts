import { Component, OnInit } from '@angular/core';
import { loginService } from '../Service/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerDate!: Date;
  authenticate! : boolean;

  constructor(private loginService: loginService) { 
    this.authenticate = this.loginService.getAuth();
  }

  ngOnInit(): void {
    this.footerDate = new Date();
  }

}
