import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  postForm! : FormGroup;
  urlRegex!: RegExp;
  value!: string;

  constructor(private formBuilder: FormBuilder,
              private postlistService: PostListService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

}
