import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PostListModel } from '../Model/post-list.model';
import { PostListService } from '../Service/post-list.service';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsletterService } from '../Service/newsletter.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  
  postActualite: PostListModel[] = [];
  imageUrl$!: Observable<string>;
  emailForm: FormGroup;
  dataEmail: any;
  showInvalidEmailMessage = false;
  showInvalidEmailMessage2 = false;
  showInvalidEmailMessage3 = false;

  constructor(private postlistService: PostListService,
              private afStorage: AngularFireStorage,
              private fb: FormBuilder,
              private newsletterService: NewsletterService) { 
    this.postlistService.getPost().subscribe((data) => {
      this.postActualite = data;
      this.trierEtLimitePosts();
    });
    this.emailForm = this.fb.group({
      email: [''],
    });
    this.newsletterService.getEmail().subscribe((data) => {
      this.dataEmail = data.map((element) => { return element.email })
      console.log(this.dataEmail)
    })
  }

  ngOnInit(): void {
  }

  trierEtLimitePosts() {
    this.postActualite.sort((a, b) => new Date(b.datePost).getTime() - new Date(a.datePost).getTime());
    this.postActualite = this.postActualite.slice(0, 3);
  }

  onSubmit() {
    const emailControl = this.emailForm.get('email');
      if (emailControl && emailControl.value) {
        const emailValue = emailControl.value;
      
        if (!emailValue.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
          const emailInput = document.querySelector('input.p-inputtext-sm') as HTMLElement;
          emailInput.classList.add('ng-invalid', 'ng-dirty');
          this.showInvalidEmailMessage = true;
          this.showInvalidEmailMessage2 = false;
          this.showInvalidEmailMessage3 = false;
          return;
        } else if(this.dataEmail.includes(emailControl.value)){
          const emailInput = document.querySelector('input.p-inputtext-sm') as HTMLElement;
          emailInput.classList.add('ng-invalid', 'ng-dirty');
          this.showInvalidEmailMessage = false;
          this.showInvalidEmailMessage2 = true;
          this.showInvalidEmailMessage3 = false;
          console.log(this.dataEmail.includes(emailControl.value))
          return;
        } else {
          this.showInvalidEmailMessage = false;
          this.showInvalidEmailMessage2 = false;
          this.showInvalidEmailMessage3 = true;
          const emailInput = document.querySelector('input.p-inputtext-sm') as HTMLElement;
          emailInput.classList.remove('ng-invalid', 'ng-dirty');
          console.log('Ok on est bon')
          console.log(this.dataEmail.includes(emailControl.value))
        }
      }
  }

  onAdd(value: any){
    this.showInvalidEmailMessage3 = false
    this.newsletterService.addMail(value);
    this.emailForm.reset();
  }
}

