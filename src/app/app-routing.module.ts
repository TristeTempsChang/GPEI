import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ContactComponent } from './contact/contact.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { LoginComponent } from './login/login.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { AuthGuard } from './guards/auth.guard';
import { MaternelleComponent } from './maternelle/maternelle.component';
import { CollegeComponent } from './college/college.component';
import { ElementaireComponent } from './elementaire/elementaire.component';
import { LyceeComponent } from './lycee/lycee.component';

const routes: Routes = [
  { path: 'addPost', component: AddPostComponent, canActivate: [AuthGuard] },
  { path: '', component: AccueilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'actualite', component: ActualiteComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AccueilAdminComponent, canActivate: [AuthGuard]},
  { path: 'maternelle', component: MaternelleComponent},
  { path: 'elementaire', component: ElementaireComponent},
  { path: 'college', component: CollegeComponent},
  { path: 'lycee', component: LyceeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
