import { Injectable } from '@angular/core';
import { PostListModel } from '../Model/post-list.model';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { Timestamp } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostListService {

    constructor(private firestore: Firestore) {
      
    }

    
  getPost() {
    let $postRef = collection(this.firestore, "Post");
    return collectionData($postRef, {idField: "id"}).pipe(
      map(posts => {
        return posts.map(post => {
          Object.keys(post).filter(key => post[key] instanceof Timestamp)
            .forEach(key => post[key] = post[key].toDate())
          return post;
        });
      })
    ) as Observable<PostListModel[]>;
  }

  addPost(post: PostListModel) {
    let $postRef = collection(this.firestore, "Post");
    return addDoc($postRef, post);
  }

  modifyPost() {

  }

  deletePost(id: string) {
    let $postRef = doc(this.firestore, "Post/" + id);
    return deleteDoc($postRef);
  }
}