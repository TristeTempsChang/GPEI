import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-why-adherer',
  templateUrl: './why-adherer.component.html',
  styleUrls: ['./why-adherer.component.scss']
})
export class WhyAdhererComponent {

  constructor(private router: Router) { 
}

onContinue() {
  this.router.navigateByUrl('nous-rejoindre');
}

}
