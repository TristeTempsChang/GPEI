import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'addPost', component: AddPostComponent },
  { path: '', component: AccueilComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
