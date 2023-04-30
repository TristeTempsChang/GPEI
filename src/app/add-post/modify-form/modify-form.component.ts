import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modify-form',
  templateUrl: './modify-form.component.html',
  styleUrls: ['./modify-form.component.scss']
})
export class ModifyFormComponent implements OnInit {
  testPostForm! : FormGroup;
  textContent!: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.testPostForm = this.formBuilder.group({
      text: new FormControl(),
    })
  }

  testSubmit() {
    this.textContent = this.testPostForm.get('text')?.value;
    console.log(this.testPostForm.get('text')?.value)
  }
}
