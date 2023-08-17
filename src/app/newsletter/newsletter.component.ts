import { Component, OnInit } from '@angular/core';
import { NewsletterService } from '../Service/newsletter.service';
import { AdherentService } from '../Service/adherent.service';
import { ConfirmationService, MessageService} from 'primeng/api';
import * as emailjs from 'emailjs-com';

interface newsletter {
  id: string,
  email: string
}

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class NewsletterComponent implements OnInit {

   dataNewsletter: any
   dataNewsletterMapped: any
   dataAdherent: any
   stringTag: string = 'Abonné'
   dataAdherentFiltered: any;
   selectedNewsletter!: newsletter[]
   visible!: boolean;

   constructor(private newsletterService: NewsletterService, 
               private adherentService: AdherentService, 
               private messageService: MessageService,
               private confirmationService: ConfirmationService){
    this.newsletterService.getEmail().subscribe((data) => {
      this.dataNewsletter = data;
      this.dataNewsletterMapped = data.map((element) => { return element.email })
      console.log(this.dataNewsletterMapped);
    })
   }
   
  ngOnInit() {
    this.adherentService.getAdherent().subscribe((data) => {
      this.dataAdherent = data.filter((dataFilter) => dataFilter.accepted === true)
      this.dataAdherentFiltered = this.dataAdherent.map((element: { email: any; }) => { return element.email })
      console.log(this.dataAdherentFiltered)
    })
  }

   getSeverity(element: any) {
      if(this.dataAdherentFiltered.includes(element)){
        return 'warning';
      } else {
        return 'danger'
      }
   }

   deleteNewsletter(datas: any[]){
    datas.forEach(element => {
      this.confirmationService.confirm({
        message: 'Êtes-vous sûr de vouloir supprimer cet abonné ? ( la suppression est définitive ! )',
        header: 'Confirmation de suppression',
        icon: 'pi pi-info-circle',
        acceptLabel: 'Oui',
        rejectLabel: 'Non',
        accept: () => {
            this.newsletterService.deleteMail(element.id)
            .then((data) => {
              this.messageService.add({severity: 'info', summary: "L'adhérent a bien été supprimé !", detail: ''});
            })
            .catch((err) => {
              this.messageService.add({severity: 'error', summary: "Une erreur est survenue...", detail: ''});
            });
          },
          reject: () => {
            
          }
      });
    })
   }

   sendAll(datas: any[]) {
    this.visible = true;
    datas.forEach(data => {
      if (data.email) {
        const templateParams = {
          newsletter_email: data.email
        };
        emailjs.send('service_akidcfv', 'template_v04dare', templateParams, 'bICFAgRyPi_v4z5mc')
          .then(
            (response) => {
              this.visible = false;
              this.messageService.add({severity: 'success', summary: "L'e-mail a été envoyé avec succès", detail: ''});
              console.log(`SUCCESS for ${data.email}!`, response.status, response.text);
            },
            (error) => {
              this.messageService.add({severity: 'error', summary: "Une erreur est survenue...", detail: ''});
              console.log(`FAILED for ${data.email}...`, error);
            }
          );
      } else {
        console.log(`Skipping empty email address...`);
      }
    });
  }

  sendSelected(datas: any[]){
    this.visible = true;
    datas.forEach(data => {
      if (data.email) {
        const templateParams = {
          newsletter_email: data.email
        };
        emailjs.send('service_akidcfv', 'template_v04dare', templateParams, 'bICFAgRyPi_v4z5mc')
          .then(
            (response) => {
              this.visible = false;
              this.messageService.add({severity: 'success', summary: "L'e-mail a été envoyé avec succès", detail: ''});
              console.log(`SUCCESS for ${data.email}!`, response.status, response.text);
            },
            (error) => {
              this.messageService.add({severity: 'error', summary: "Une erreur est survenue...", detail: ''});
              console.log(`FAILED for ${data.email}...`, error);
            }
          );
      } else {
        console.log(`Skipping empty email address...`);
      }
    });
  }
}
