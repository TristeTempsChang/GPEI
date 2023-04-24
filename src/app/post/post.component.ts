import { Component, Input, OnInit } from '@angular/core';
import { PostListModel } from '../Model/post-list.model';
import { PostListService } from '../Service/post-list.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: PostListModel[] = []; 
  @Input() act = this.posts;

  constructor(private postListService: PostListService) {
    this.postListService.getPost().subscribe((data) => {
      this.posts = data;
      data.forEach((element) => {
        element.datePost.toDateString();
      })
    })
  }

  ngOnInit(): void {
  }
}
