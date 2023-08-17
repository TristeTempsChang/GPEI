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
import { MembresComponent } from './membres/membres.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { WhyAdhererComponent } from './why-adherer/why-adherer.component';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';
import { JoinGPEIComponent } from './join-gpei/join-gpei.component';
import { DocumentComponent } from './document/document.component';
import { AddDocComponent } from './add-doc/add-doc.component';
import { AdminAdherentComponent } from './admin-adherent/admin-adherent.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

const routes: Routes = [
  { path: 'addPost', component: AddPostComponent, canActivate: [AuthGuard]},
  { path: '', component: AccueilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'actualite', component: ActualiteComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AccueilAdminComponent, canActivate: [AuthGuard]},
  { path: 'maternelle', component: MaternelleComponent},
  { path: 'elementaire', component: ElementaireComponent},
  { path: 'college', component: CollegeComponent},
  { path: 'lycee', component: LyceeComponent},
  { path: 'membre', component: MembresComponent},
  { path: 'actualite/:id', component: SinglePostComponent},
  { path: 'pourquoi-adherer?', component: WhyAdhererComponent},
  { path: 'qui-sommes-nous-?', component: QuiSommesNousComponent},
  { path: 'nous-rejoindre', component: JoinGPEIComponent},
  { path: 'document', component: DocumentComponent},
  { path: 'addDoc', component: AddDocComponent, canActivate: [AuthGuard]},
  { path: 'adminAdherent', component: AdminAdherentComponent, canActivate: [AuthGuard]},
  { path: 'adminNewsletter', component: NewsletterComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
