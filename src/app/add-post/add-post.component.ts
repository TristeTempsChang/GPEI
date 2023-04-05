import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostListModel } from '../Model/post-list.model';
import { PostListService } from '../Service/post-list.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  providers: [MessageService]
})
export class AddPostComponent implements OnInit {

  loginForm! : FormGroup;
  urlRegex!: RegExp;
  value!: string;

  constructor(private formBuilder: FormBuilder,
              private postlistService: PostListService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onSubmit(value: any){
      const pusername = 'test'
      const ppassword = 'mdp'

      if(pusername === value.username && ppassword === value.password){
        console.log("c'est le bon login")
      }
      else {
        console.log('ahhhh sa mère la pute')
      }
    
  }

}
