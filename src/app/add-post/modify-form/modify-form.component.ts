import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { PostListService } from 'src/app/Service/post-list.service';
import { AddPostComponent } from '../add-post.component';
import { finalize } from 'rxjs';
import { getStorage, ref, deleteObject } from "firebase/storage";

@Component({
  selector: 'app-modify-form',
  templateUrl: './modify-form.component.html',
  styleUrls: ['./modify-form.component.scss']
})
export class ModifyFormComponent implements OnInit {

  modifyPostForm! : FormGroup;
  id: any;
  title: any;
  image: any;
  content: any;
  type: any;
  categoriee: any;
  selectedImage: any = null;
  url!: string;
  visible!: boolean;
  imageName: any;
  activated: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private postListService: PostListService,
              public ref: DynamicDialogRef,
              private firestorage: AngularFireStorage,
              private addPostService: AddPostComponent) {

                this.id = this.addPostService.IdUpdate;
                this.postListService.getPostById(this.id).subscribe((data) => {
                  this.title = data.title;
                  this.image = data.image;
                  console.log(this.image + "Dans le subscribe");
                  this.content = data.content;
                  this.type = data.type;
                  this.categoriee = data.categorie.toString();
                  this.modifyPostForm.patchValue({
                    image: this.image,
                    categorie: this.categoriee
                  })
                  console.log(this.categoriee +" " + "cate")
                });
                console.log(this.image + "En dehors du subscribe");
              }

  ngOnInit(): void {
    console.log(this.image + "Dans NgOnInit");

    this.modifyPostForm = this.formBuilder.group({
      image: new FormControl(''),
      categorie: new FormControl(''),
      title: new FormControl(''),
      type: new FormControl(''),
      content: new FormControl(''),
      datePost: new Date()
    })
  }

  async showPreview(event: any){
    if(event.files && event.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e:any) => 
        this.image = e.target.result;
        this.selectedImage = event.files[0];
        reader.readAsDataURL(event.files[0]);
        this.activated = true;
    } else {
      this.image = "../../assets/default-placeholder.png";
      this.selectedImage = null;
    }
  }

  onSubmit(){
    this.visible = true;
    if(this.activated === true){
      var path = `post/${this.selectedImage.name}`;
      const fileRef = this.firestorage.ref(path);
      this.firestorage.upload(path, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.modifyPostForm.patchValue({
              image: url.toString(),
            });
            console.log(this.modifyPostForm.value);
            this.visible = false;
            this.postListService.updatePost(this.id,this.modifyPostForm.value)
            .then
            (() => {
              
            })
            .catch((err)=> {
              console.error(err);
            })
            this.ref.close();
          });
        })
      ).subscribe()
    } else {
      this.visible = false;
      this.postListService.updatePost(this.id,this.modifyPostForm.value)
        .then
          (() => {
              
          })
        .catch((err)=> {
          console.error(err);
        })
      this.ref.close();
    }
  }
}
