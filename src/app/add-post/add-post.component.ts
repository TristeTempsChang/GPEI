import { Component, OnInit } from '@angular/core';
import { PostListModel } from '../Model/post-list.model';
import { PostListService } from '../Service/post-list.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddingFormComponent } from './adding-form/adding-form.component';
import { ConfirmationService} from 'primeng/api';
import { ModifyFormComponent } from './modify-form/modify-form.component';
import { getStorage, ref, deleteObject } from "firebase/storage";
import { AngularFireStorage } from '@angular/fire/compat/storage';

interface Categorie {
  categorie: string;
}

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  providers: [DialogService, ConfirmationService]
})
export class AddPostComponent implements OnInit {

  postAct: PostListModel[]=[];
  categorie!: Categorie[];
  ref!: DynamicDialogRef;
  IdUpdate: any;
  image: any;
  imageName: any;
  filter: any;

  constructor(private postlistService: PostListService,
              private dialogService: DialogService,
              private confirmationService: ConfirmationService,
              private firestorage: AngularFireStorage) {

      this.postlistService.getPost().subscribe((data) => {
      this.postAct = data;
      this.postAct.sort((a, b) => new Date(b.datePost).getTime() - new Date(a.datePost).getTime());
    })
   }

  ngOnInit(): void {
    this.categorie = [
      {categorie: 'Maternelle'},
      {categorie: 'Elementaire'},
      {categorie: 'Collège'},
      {categorie: 'Lycée'},
      {categorie: 'Toutes catégories'}
    ]

    
  }

  onSortChange(event: any) {
    if(event.value.categorie){
      this.postlistService.getPost().subscribe((data) => {
        this.postAct = data;
        this.postAct = this.postAct.filter(post => post.categorie === event.value.categorie);
      });
    } else {
      this.postlistService.getPost().subscribe((data) => {
        this.postAct = data;
        this.postAct.sort((a, b) => new Date(b.datePost).getTime() - new Date(a.datePost).getTime());
      });
    }
  }

  reset() {
    this.postlistService.getPost().subscribe((data) => {
      this.postAct = data;
      this.postAct.sort((a, b) => new Date(b.datePost).getTime() - new Date(a.datePost).getTime());
    });
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


  showDialogModify(id: string) {
    this.ref = this.dialogService.open(ModifyFormComponent, {
      header: 'Modifier le post',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });
    this.IdUpdate = id;
  }

    deleteDialog(postId: string, image: string) {
      this.image = image;
      const reff = this.firestorage.refFromURL(this.image);
      return reff.getMetadata().toPromise().then(metaData => {
        this.imageName = metaData.name.toString();

      const storage = getStorage();
      const fileRef = ref(storage, `post/${this.imageName}`);

      this.confirmationService.confirm({
        message: 'Êtes-vous sûr de vouloir supprimer ce post ?',
        header: 'Confirmation de suppression',
        icon: 'pi pi-info-circle',
        acceptLabel: 'Oui',
        rejectLabel: 'Non',
        accept: () => {
            this.postlistService.deletePost(postId)
            .then((data) => {

            })
            .catch((err) => {
              console.error(err)
            })

            deleteObject(fileRef).then(() => {

            }).catch((error) => {
              console.error(error);
            });
        },
        reject: () => {
          
        }
      })
    });
  }


}
