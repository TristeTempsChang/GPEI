import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PostListModel } from '../Model/post-list.model';
import { PostListService } from '../Service/post-list.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  
  postActualite!: PostListModel[];
  
  constructor(private postlistService: PostListService) { }

  ngOnInit(): void {
    this.postActualite = this.postlistService.getAllPostList();
  }

}
