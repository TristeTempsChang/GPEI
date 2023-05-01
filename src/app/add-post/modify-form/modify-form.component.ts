import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { PostListService } from 'src/app/Service/post-list.service';

interface Categorie {
  categorie: string;
}

@Component({
  selector: 'app-modify-form',
  templateUrl: './modify-form.component.html',
  styleUrls: ['./modify-form.component.scss']
})
export class ModifyFormComponent implements OnInit {
  modifyPostForm! : FormGroup;
  categorie!: Categorie[];

  constructor(private formBuilder: FormBuilder,
              private postListService: PostListService,
              public ref: DynamicDialogRef,
              private firestorage: AngularFireStorage) {}

  ngOnInit(): void {
    this.categorie = [
      {categorie: 'Maternelle'},
      {categorie: 'Elementaire'},
      {categorie: 'Collège'},
      {categorie: 'Lycée'},
      {categorie: 'Toutes catégories'}
    ]

    this.modifyPostForm = this.formBuilder.group({
      categorie: new FormControl(),
      image: new FormControl(''),
      title: new FormControl(''),
      type: new FormControl(''),
      content: new FormControl(''),
      datePost: new Date()
    })
  }
}
