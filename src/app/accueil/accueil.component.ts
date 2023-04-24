import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PostListModel } from '../Model/post-list.model';
import { PostListService } from '../Service/post-list.service';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  
  postActualite: PostListModel[]=[];
  imageUrl$!: Observable<string>;
  
  constructor(private postlistService: PostListService,
              private afStorage: AngularFireStorage) { 
    this.postlistService.getPost().subscribe((data) => {
      this.postActualite = data;
  })
}

  ngOnInit(): void {
    const imageRef = this.afStorage.ref('post/testDimension.png');
    this.imageUrl$ = imageRef.getDownloadURL();
    this.imageUrl$.subscribe(url => {
      console.log('Image URL:', url);
    });
  }

}
