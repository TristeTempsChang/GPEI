import { Component, OnInit } from '@angular/core';
import { loginService } from '../Service/login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  username!: string;
  pwd!: string;
  loginForm! : FormGroup;

  constructor(private loginService: loginService, 
              private formBuilder: FormBuilder,
              private router: Router){
    this.loginService.getLogin().subscribe((data) =>{
      data.forEach(element => {
        this.username = element.identifiant;
        this.pwd = element.password;
      });
    })
  } 

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      id: new FormControl('', [Validators.required]),
      mdp: new FormControl('', [Validators.required]),
    })
  }

  public onLogin(value: any) {
    const id = value.id;
    const mdp = value.mdp;
    if(this.username === id && this.pwd === mdp){
      console.log("Utilisateur authentifié avec SUCCES")
      const authenticate = true;
      this.loginService.setAuth(authenticate);
      this.loginForm.reset();
      this.router.navigateByUrl('admin');
    }
    else {
      console.log("Mauvais identifiant ou mot de passe");
      const authenticate = false;
      this.loginService.setAuth(authenticate);
      this.loginForm.reset();
    }
  }


}
