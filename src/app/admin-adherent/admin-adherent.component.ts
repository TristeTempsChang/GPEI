import { Component } from '@angular/core';
import { AdherentModel } from '../Model/adherent.model';
import { AdherentService } from '../Service/adherent.service';
import * as FileSaver from 'file-saver';
import * as xlsx from 'xlsx';
import { ConfirmationService, MessageService} from 'primeng/api';
import { FormBuilder, FormGroup } from '@angular/forms';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-admin-adherent',
  templateUrl: './admin-adherent.component.html',
  styleUrls: ['./admin-adherent.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class AdminAdherentComponent {

  adherentData: AdherentModel[]=[];
  adherentDataTrue: AdherentModel[]=[];
  adherentDataById: AdherentModel[]=[];
  selectedData!: AdherentModel[];
  selectedDataTrue!: AdherentModel;
  ValidateForm! : FormGroup;

  constructor(private adherentService: AdherentService, 
              private formBuilder: FormBuilder, 
              private confirmationService: ConfirmationService,
              private messageService: MessageService){
    this.adherentService.getAdherent().subscribe((data) => {
      this.adherentData = data.filter((dataFilter) => dataFilter.accepted === false);
      this.adherentDataTrue = data.filter((dataFilter) => dataFilter.accepted === true);
    })
  }

    exportExcel() {
      import('xlsx').then((xlsx) => {
          const worksheet = xlsx.utils.json_to_sheet(this.adherentDataTrue);
          const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
          const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
          this.saveAsExcelFile(excelBuffer, 'products');
      });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
          type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, 'Parents GPEI au ' + formatDate(new Date(),'dd/MM/yyyy', 'fr') + EXCEL_EXTENSION);
  }

  getDataById(id: string){
    this.adherentService.getAdherentById(id).subscribe((data) => {
      this.adherentDataById = data;
    })
  }

  AddAdherent() {
    this.selectedData.forEach((element) => {
      this.ValidateForm = this.formBuilder.group({
        name: element.name,
        adress: element.adress,
        cpv: element.cpv,
        tel: element.tel,
        email: element.email,
        enfant: this.formBuilder.array(
          element.enfant.map((child) => this.createChildFormGroup(child))
        ),
        engage: element.engage,
        poste: element.poste,
        choix: element.choix,
        accepted: true
      });
      this.confirmationService.confirm({
        message: 'Êtes-vous sûr de vouloir ajouter cet adhérent ? ( A t-il correctement effectué un virement ou a t-il remis un chèque ? )',
        header: "Ajout d'un nouvel adhérent",
        icon: 'pi pi-info-circle',
        acceptLabel: 'Oui',
        rejectLabel: 'Non',
        accept: () => {
          if (this.selectedData && this.selectedData.length > 0) {
            this.adherentService.updateAdherent(element.id, this.ValidateForm.value)
            .then((data) => {
              this.messageService.add({severity: 'success', summary: "Nouvel adhérent ajouté !", detail: ''});
            })
            .catch((err) => {
              this.messageService.add({severity: 'error', summary: "Une erreur est survenue...", detail: ''});
            })
          }
          },
          reject: () => {
            
          }
      });
    });
  }
  
  createChildFormGroup(childData: any): FormGroup {
    return this.formBuilder.group({
      NameFirstName: childData.NameFirstName,
      etablissement: childData.etablissement,
      lvl: childData.lvl
    });
  }  

  deleteAdherent(){
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer cet adhérent ? ( la suppression est définitive ! )',
      header: 'Confirmation de suppression',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Oui',
      rejectLabel: 'Non',
      accept: () => {
          this.adherentService.deleteAdherent(this.selectedDataTrue.id)
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
  }

}
