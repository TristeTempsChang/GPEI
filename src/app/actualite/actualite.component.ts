import { Component, OnInit } from '@angular/core';
import { PostListModel } from '../Model/post-list.model';
import { PostListService } from '../Service/post-list.service';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit{

  actualite: PostListModel[]=[];
  
  constructor(private postlistService: PostListService) {
    this.postlistService.getPost().subscribe((data) => {
      this.actualite = data;
    })
   }
  
  ngOnInit(): void {
    
  }

}
