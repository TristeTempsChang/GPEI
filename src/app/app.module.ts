import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import * as fr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import {CarouselModule} from 'primeng/carousel';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { ContactComponent } from './contact/contact.component';
import { registerLocaleData } from '@angular/common';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    FooterComponent,
    PostComponent,
    AddPostComponent,
    CarrouselComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    MessagesModule,
    ToastModule,
    InputTextModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
