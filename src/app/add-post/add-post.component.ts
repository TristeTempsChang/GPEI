import { Component, OnInit } from '@angular/core';
import { PostListModel } from '../Model/post-list.model';
import { PostListService } from '../Service/post-list.service';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddingFormComponent } from './adding-form/adding-form.component';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  providers: [DialogService, MessageService]
})
export class AddPostComponent implements OnInit {

  postAct: PostListModel[]=[];
  ref!: DynamicDialogRef;

  constructor(private postlistService: PostListService,
              public dialogService: DialogService, 
              public messageService: MessageService) {

      this.postlistService.getPost().subscribe((data) => {
      this.postAct = data;
    })
   }

  ngOnInit(): void {
    
  }

  showDialogAdd() {
    this.ref = this.dialogService.open(AddingFormComponent, {
      header: 'Ajouter un post',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });
  }


  showDialogModify() {
    this.ref = this.dialogService.open(AddPostComponent, {
      header: 'Select a Product',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });
  }


}
