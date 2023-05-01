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
  first: number = 0;
  rows: number = 9;
  total!: number;
  @Input() act = this.posts;

  constructor(private postListService: PostListService) {
    this.postListService.getPost().subscribe((data) => {
      this.posts = data;
      this.total = this.posts.length;
      this.posts.sort((a, b) => new Date(b.datePost).getTime() - new Date(a.datePost).getTime());
      data.forEach((element) => {
        element.datePost.toDateString();
      })
    })
  }

  ngOnInit(): void {
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
