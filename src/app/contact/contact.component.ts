import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm! : FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    })
  }

  onSubmit(value: any) {
    const templateParams = {
      from_name: value.name,
      from_firstName: value.firstName,
      from_email: value.email,
      subject: value.subject,
      message: value.message
    };

    emailjs.send('service_08esvjr', 'template_y3k42pi', templateParams, 'NlyDEg8D_5vWuJ4bf')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });

      this.contactForm.reset();
  }

}