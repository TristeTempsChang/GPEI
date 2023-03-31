import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MessageService]
})
export class ContactComponent implements OnInit {

  contactForm! : FormGroup;

  constructor(private formBuilder: FormBuilder,
              private messageService: MessageService) { }

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
    console.log(value)
  }

}