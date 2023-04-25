//Module Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import * as fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Module component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { ContactComponent } from './contact/contact.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { LoginComponent } from './login/login.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component'
import { loginService } from './Service/login.service';
import { PostListService } from './Service/post-list.service';

//Module PrimeNG
import { CarouselModule } from 'primeng/carousel';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { OrganizationChartModule } from 'primeng/organizationchart';

//Module firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { MaternelleComponent } from './maternelle/maternelle.component';
import { ElementaireComponent } from './elementaire/elementaire.component';
import { CollegeComponent } from './college/college.component';
import { LyceeComponent } from './lycee/lycee.component';
import { MembresComponent } from './membres/membres.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    FooterComponent,
    PostComponent,
    AddPostComponent,
    CarrouselComponent,
    ContactComponent,
    ActualiteComponent,
    LoginComponent,
    AccueilAdminComponent,
    MaternelleComponent,
    ElementaireComponent,
    CollegeComponent,
    LyceeComponent,
    MembresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    MessagesModule,
    ToastModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    ChartModule,
    CardModule,
    OrganizationChartModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [loginService, PostListService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
