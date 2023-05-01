import { Component, OnInit } from '@angular/core';
import { PostListModel } from '../Model/post-list.model';
import { PostListService } from '../Service/post-list.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddingFormComponent } from './adding-form/adding-form.component';
import { ConfirmationService} from 'primeng/api';
import { ModifyFormComponent } from './modify-form/modify-form.component';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  providers: [DialogService, ConfirmationService]
})
export class AddPostComponent implements OnInit {

  postAct: PostListModel[]=[];
  ref!: DynamicDialogRef;

  constructor(private postlistService: PostListService,
              private dialogService: DialogService,
              private confirmationService: ConfirmationService) {

      this.postlistService.getPost().subscribe((data) => {
      this.postAct = data;
      this.postAct.sort((a, b) => new Date(b.datePost).getTime() - new Date(a.datePost).getTime());
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
    this.ref = this.dialogService.open(ModifyFormComponent, {
      header: 'Modifier le post',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });
  }

    deleteDialog(postId: string) {
      this.confirmationService.confirm({
        message: 'Êtes-vous sûr de vouloir supprimer ce post ?',
        header: 'Confirmation de suppression',
        icon: 'pi pi-info-circle',
        acceptLabel: 'Oui',
        rejectLabel: 'Non',
        accept: () => {
            this.postlistService.deletePost(postId)
            .then(() => {

            })
            .catch(() => {

            })
        },
        reject: () => {
          console.log('fuck');
        }
    });
  }


}
