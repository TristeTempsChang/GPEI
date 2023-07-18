import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ConfirmationService, MessageService } from 'primeng/api';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  styleUrls: ['./add-doc.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class AddDocComponent implements OnInit{
  
  files: { name: string, downloadUrl: string, size: number, type: string, creationDate: string }[] = [];
  selectedFiles!: { name: string, downloadUrl: string, size: number, type: string, creationDate: string }[];

  constructor(private storage: AngularFireStorage, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    const directoryRef = this.storage.ref('doc/');

    directoryRef.listAll().subscribe(result => {
      result.items.forEach(item => {
        item.getMetadata().then(metadata => {
          item.getDownloadURL().then(downloadUrl => {
            const fileSize = metadata.size;
            const fileSizeDisplay = this.formatFileSize(fileSize);
            const file = {
              name: item.name,
              downloadUrl: downloadUrl,
              size: fileSize,
              sizeDisplay: fileSizeDisplay,
              type: metadata.contentType || 'Type de fichier inconnu',
              creationDate: metadata.timeCreated
            };
            this.files.push(file);
          });
        });
      });
    });
  }

  onUpload(event: any) {
    const files = event.files;
    if (files.length > 0) {
      const file = files[0];
      const filePath = `doc/${file.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);

      task
        .snapshotChanges()
        .pipe(finalize(() => {
          fileRef.getDownloadURL().subscribe(downloadUrl => {
            console.log(downloadUrl);
            this.loadFiles();
          });
        }))
        .subscribe();
    }
    this.messageService.add({severity: 'success', summary: 'Le fichier a été importé avec succès !', detail: ''});
  }
  

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer ce fichier ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Oui',
      rejectLabel: 'Non',
      accept: () => {
          if (this.selectedFiles && this.selectedFiles.length > 0) {
            this.selectedFiles.forEach(file => {
              const fileRef = this.storage.ref(`doc/${file.name}`);
              fileRef.delete().subscribe(() => {
                this.messageService.add({severity: 'info', summary: 'Le fichier a été supprimé avec succès !', detail: ''});
                this.loadFiles();
              }, error => {
                // Gestion de l'erreur lors de la suppression du fichier
                console.error('Erreur lors de la suppression du fichier:', error);
              });
            });
          }
        }
    });
  }

  formatFileSize(size: number): string {
    if (size === 0) return '0 B';

    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const k = 1024;
    const i = Math.floor(Math.log(size) / Math.log(k));
    const fileSize = parseFloat((size / Math.pow(k, i)).toFixed(2));

    return `${fileSize} ${units[i]}`;
  }

  loadFiles() {
    this.files = []; // Réinitialisez la liste des fichiers

    const directoryRef = this.storage.ref('doc/');

    directoryRef.listAll().subscribe(result => {
      result.items.forEach(item => {
        item.getMetadata().then(metadata => {
          item.getDownloadURL().then(downloadUrl => {
            const fileSize = metadata.size;
            const fileSizeDisplay = this.formatFileSize(fileSize);
            const file = {
              name: item.name,
              downloadUrl: downloadUrl,
              size: fileSize,
              sizeDisplay: fileSizeDisplay,
              type: metadata.contentType || 'Type de fichier inconnu',
              creationDate: metadata.timeCreated
            };
            this.files.push(file);
          });
        });
      });
    });
  }

}
