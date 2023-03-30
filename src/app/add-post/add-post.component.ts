import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostListModel } from '../Model/post-list.model';
import { PostListService } from '../Service/post-list.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postForm! : FormGroup;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
              private postlistService: PostListService,
              private router: Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.postForm = this.formBuilder.group({
      type: [null, [Validators.required] ],
      title: [null, [Validators.required] ],
      imageUrl: [null, [Validators.required] ]
    }, {
      updateOn: 'blur'
  });
  }

  onSubmit(): void {
    this.postlistService.addPostOnList(this.postForm.value);
    this.router.navigateByUrl("");
  }

}
