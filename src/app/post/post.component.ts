import { Component, Input, OnInit } from '@angular/core';
import { PostListModel } from '../Model/post-list.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() act!: PostListModel[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
