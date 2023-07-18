import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {
  files: { name: string, downloadUrl: string }[] = [];
  first: number = 0;
  rows: number = 9;
  total!: number;
  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
    const directoryRef = this.storage.ref('doc/');

    directoryRef.listAll().subscribe(result => {
      result.items.forEach(item => {
        item.getDownloadURL().then(downloadUrl => {
          this.files.push({ name: item.name, downloadUrl: downloadUrl });
          this.total = this.files.length;
        });
      });
    });
  }

  truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
