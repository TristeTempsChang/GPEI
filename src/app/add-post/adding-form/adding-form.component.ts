import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
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
    this.addingPostForm.patchValue({
      image: this.url,
      categorie: this.addingPostForm.controls['categorie'].value.categorie
    });
    this.postListService.addPost(this.addingPostForm.value)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);  
    });
    this.ref.close();
  }

  async showPreview(event: any){
    if(event.files && event.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e:any) => {
        this.imgSrc = e.target.result;
        this.selectedImage = event.files[0];
      };
      reader.readAsDataURL(event.files[0]);
    } else {
      this.imgSrc = "../../assets/default-placeholder.png";
      this.selectedImage = null;
    }

    const file = event.files[0]
    if(file) {
      const path = `post/${file.name}`
      const uploadTask = await this.firestorage.upload(path, file)
      const url = await uploadTask.ref.getDownloadURL() 
      this.url = url;
    }
  }


}
