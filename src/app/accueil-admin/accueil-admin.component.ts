import { Component, OnInit } from '@angular/core';
import { PostListService } from '../Service/post-list.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AdherentService } from '../Service/adherent.service';

@Component({
  selector: 'app-accueil-admin',
  templateUrl: './accueil-admin.component.html',
  styleUrls: ['./accueil-admin.component.scss']
})
export class AccueilAdminComponent implements OnInit {

  numberAdherent!: number;
  numberGestion!: number;
  numberDoc!: number;
  numberMail!: number;
  data: any;
  options: any;

  constructor(private postService: PostListService, private storage: AngularFireStorage, private adherentService: AdherentService){}
  ngOnInit(): void {
    this.postService.getPost().subscribe(element => {
        this.numberGestion = element.length;
    })
    this.adherentService.getAdherent().subscribe((data) => {
        this.numberAdherent = data.filter((dataFilter) => dataFilter.accepted === true).length;
      })
    const directoryRef = this.storage.ref('doc/');
    directoryRef.listAll().subscribe(result => {
        this.numberDoc = result.items.length;
    })
    this.numberMail = 200;

    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.data = {
            labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            datasets: [
                {
                    label: "Nombre de posts d'actualitée crée sur l'année : ",
                    backgroundColor: "rgb(224, 142, 19)",
                    borderColor: 'rgb(224, 142, 19)',
                    data: [65, 59, 80, 81, 56, 55, 40, 12, 33, 10, 32, 56]
                },
                {
                    label: "Nombre de demandes d'adhésion sur l'année :",
                    backgroundColor: 'rgb(0,128,0)',
                    borderColor: 'rgb(0,128,0)',
                    data: [28, 48, 40, 19, 86, 27, 90, 37, 35, 89, 19, 22]
                }
            ]
        };

        this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.8,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary,
                      font: {
                          weight: 500
                      }
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }

          }
      };
  }

}
