import { Component, OnInit } from '@angular/core';
import { loginService } from '../Service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imageUrl!: string;
  iconUrl! : string;
  plusIconUrl! :string;
  authenticate! : boolean;

  constructor(private loginService: loginService,
              private router: Router) { 
    this.authenticate = this.loginService.getAuth();
  }

  ngOnInit(): void {
    this.imageUrl = "../../assets/logo-gpei.png"
    this.iconUrl = "../../assets/Hamburger.png";
    this.plusIconUrl = "../../assets/circle.png"
  }

  displayDropdownResp() {
    const test = document.getElementById("dropdown-content_resp");
  
    const toggleDisplay = () => {
      if (window.innerWidth <= 897) {
        if (test != undefined) {
          if (test.style.display === "none") {
            test.style.display = "block";
          }
          else {
            test.style.display = "none";
          }
        }
      } else {
        if (test != undefined) {
        test.style.display = "none";
        }
      }
    }

  
    toggleDisplay();
  
    window.addEventListener('resize', toggleDisplay);
  }

  noneDropDownresp(){
    const test = document.getElementById("dropdown-content_resp");

    if (test != undefined) {
      test.style.display = "none";
    }
  }

  displayDropMenuContent() {
    const test2 = document.getElementById("dropdownresp-content");
    const backcolor1 = document.getElementById("menu1");
    
    if (test2 != undefined) {
      if (test2.style.display === "none") {
        test2.style.display = "block";
        if (backcolor1 != undefined){
          backcolor1.style.backgroundColor = "#e08e13";
          backcolor1.style.transitionDuration = "600ms";
        }
      }
      else {
        test2.style.display = "none";
        if (backcolor1 != undefined){
          backcolor1.style.backgroundColor = "#d6d6d6";
        }
      }
    }

  }

  displayDropMenuContent2() {

    const test3 = document.getElementById("dropdownresp-content2");
    const backcolor2 = document.getElementById("menu2");

    if (test3 != undefined) {
      if (test3.style.display === "none") {
        test3.style.display = "block";
        if (backcolor2 != undefined){
          backcolor2.style.backgroundColor = "#e08e13";
          backcolor2.style.transitionDuration = "600ms";
        }
      }
      else {
        test3.style.display = "none";
        if (backcolor2 != undefined){
          backcolor2.style.backgroundColor = "#d6d6d6";
        }
      }
    }

  }

  displayDropMenuContent3() {
    
    const test4 = document.getElementById("dropdownresp-content3");
    const backcolor3 = document.getElementById("menu3");

    if (test4 != undefined) {
      if (test4.style.display === "none") {
        test4.style.display = "block";
        if (backcolor3 != undefined){
          backcolor3.style.backgroundColor = "#e08e13";
          backcolor3.style.transitionDuration = "600ms";
        }
      }
      else {
        test4.style.display = "none";
        if (backcolor3 != undefined){
          backcolor3.style.backgroundColor = "#d6d6d6";
        }
      }
    }

  }

  displayDropMenuContent4() {
    
    const test5 = document.getElementById("dropdownresp-content4");
    const backcolor4 = document.getElementById("menu4");

    if (test5 != undefined) {
      if (test5.style.display === "none") {
        test5.style.display = "block";
        if (backcolor4 != undefined){
          backcolor4.style.backgroundColor = "#e08e13";
          backcolor4.style.transitionDuration = "600ms";
        }
        
      }
      else {
        test5.style.display = "none";
        if (backcolor4 != undefined){
          backcolor4.style.backgroundColor = "#d6d6d6";
        }
      }
    }

  }

  onLogout() {
    this.authenticate = false;
    window.location.href = '';
  }
  

}
