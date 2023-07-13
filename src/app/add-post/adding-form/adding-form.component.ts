import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { finalize } from 'rxjs';
import { PostListService } from 'src/app/Service/post-list.service';

interface Categorie {
  categorie: string;
}

@Component({
  selector: 'app-adding-form',
  templateUrl: './adding-form.component.html',
  styleUrls: ['./adding-form.component.scss']
})
export class AddingFormComponent implements OnInit {

  categorie!: Categorie[];

  addingPostForm! : FormGroup;

  imgSrc: string = "../../assets/default-placeholder.png";

  selectedImage: any = null;

  url!: string;

  visible!: boolean;

  constructor(private formBuilder: FormBuilder,
              private postListService: PostListService,
              public ref: DynamicDialogRef,
              private firestorage: AngularFireStorage) { 

  }
  ngOnInit(): void {

    this.categorie = [
      {categorie: 'Maternelle'},
      {categorie: 'Elementaire'},
      {categorie: 'Collège'},
      {categorie: 'Lycée'},
      {categorie: 'Toutes catégories'}
    ]

    this.addingPostForm = this.formBuilder.group({
      categorie: new FormControl(),
      image: new FormControl(''),
      title: new FormControl(''),
      type: new FormControl(''),
      content: new FormControl(''),
      datePost: new Date()
    })
  }

  onSubmit() {
    this.visible = true;
    var path = `post/${this.selectedImage.name}`;
    const fileRef = this.firestorage.ref(path);
    this.firestorage.upload(path, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.addingPostForm.patchValue({
            image: url.toString(),
            categorie: this.addingPostForm.controls['categorie'].value.categorie
          });
          this.visible = false;
          this.postListService.addPost(this.addingPostForm.value)
            .then((data) => {
              console.log("Post ajouté: ", data);
            })
            .catch((err) => {
              console.error(err);  
            });
          this.ref.close();
        });
      })
    ).subscribe();
  }


  async showPreview(event: any){
    if(event.files && event.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e:any) => 
        this.imgSrc = e.target.result;
        this.selectedImage = event.files[0];
        reader.readAsDataURL(event.files[0]);
    } else {
      this.imgSrc = "../../assets/default-placeholder.png";
      this.selectedImage = null;
    }
  }


}
