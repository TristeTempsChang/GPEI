import { Component, Input, OnInit } from '@angular/core';
import { PostListService } from '../Service/post-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  postId: any;
  title: any;
  image: any;
  content: any;
  type: any;


  constructor(private postListService: PostListService,
              private route: ActivatedRoute) {
      this.postId = this.route.snapshot.params['id'];
      this.postListService.getPostById(this.postId).subscribe((data) => {
      this.title = data.title;
      this.image = data.image;
      this.content = data.content;
      this.type = data.type;
    })
  }
    
    ngOnInit(): void {
    }

}
