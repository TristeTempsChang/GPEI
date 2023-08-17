import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdherentService } from '../Service/adherent.service';
import * as emailjs from 'emailjs-com';

enum CheckBoxType { espece, cheque, NONE };
enum CheckBoxType2 { president, secretaire, tresorier, NONE };

@Component({
  selector: 'app-join-gpei',
  templateUrl: './join-gpei.component.html',
  styleUrls: ['./join-gpei.component.scss']
})
export class JoinGPEIComponent implements OnInit {

  check_box_type = CheckBoxType;
  currentlyChecked!: CheckBoxType;
  check_box_type2 = CheckBoxType2;
  currentlyChecked2!: CheckBoxType2;
  AdhesionForm! : FormGroup;
  visibleCheque: boolean = false;
  visibleEspece: boolean = false;
  get enfantFormArray(): FormArray {
    return this.AdhesionForm.get('enfant') as FormArray;
  }

  engagements: string[] = [];

  constructor(private formBuilder: FormBuilder, private adherentService: AdherentService){}

  ngOnInit(): void {
    this.AdhesionForm = this.formBuilder.group({
      name: new FormControl(''),
      adress: new FormControl(''),
      cpv: new FormControl(''),
      tel: new FormControl(''),
      email: new FormControl(''),
      enfant: this.formBuilder.array([
        this.createChildFormGroup()
      ]),
      engage: new FormControl(''),
      poste: new FormControl(''),
      choix: new FormControl(''),
      accepted: false
    })
  }

  createChildFormGroup(): FormGroup {
    return this.formBuilder.group({
      NameFirstName: new FormControl(''),
      etablissement: new FormControl(''),
      lvl: new FormControl('')
    });
  }

  addChild(){
    this.enfantFormArray.push(this.createChildFormGroup());
  }

  removeChild(index: number){
    this.enfantFormArray.removeAt(index);
  }

  selectCheckBox(targetType: CheckBoxType) {
    if(this.currentlyChecked === targetType) {
      this.currentlyChecked = CheckBoxType.NONE;
      return;
    }

    this.currentlyChecked = targetType;
  }

  selectCheckBox2(targetType2: CheckBoxType2) {
    if(this.currentlyChecked2 === targetType2) {
      this.currentlyChecked2 = CheckBoxType2.NONE;
      return;
    }

    this.currentlyChecked2 = targetType2;
  }

  onEngagementChange(event: any) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const isChecked = target.checked;

    if (isChecked && !this.engagements.includes(value)) {
      this.engagements.push(value);
    } else if (!isChecked && this.engagements.includes(value)) {
      this.engagements = this.engagements.filter((engagement) => engagement !== value);
    }
  }

  getEngagementValue(): string {
    return this.engagements.join(', ');
  }
  
  getPosteValue(poste: boolean): string {
    if (poste) {
      if (this.currentlyChecked2 === CheckBoxType2.president) {
        return "Président(e) de l'Association";
      } else if (this.currentlyChecked2 === CheckBoxType2.secretaire) {
        return "Secrétaire du GPEI";
      } else if (this.currentlyChecked2 === CheckBoxType2.tresorier) {
        return "Trésorier du GPEI";
      } else {
        return "";
      }
    } else {
      return "";
    }
  }
  
  getReglementValue(choix: boolean): string {
    if (choix) {
      return this.currentlyChecked === CheckBoxType.espece ? "Virement" : "Chèque";
    } else {
      return "";
    }
  }  

  onSubmitForm() {
    const engagementValue = this.getEngagementValue();
    const posteValue = this.getPosteValue(this.AdhesionForm.value.poste);
    const reglementValue = this.getReglementValue(this.AdhesionForm.value.choix);

    const formData = {
      ...this.AdhesionForm.value,
      engage: engagementValue,
      poste: posteValue,
      choix: reglementValue
    };

    if(this.currentlyChecked === CheckBoxType.cheque){
      this.visibleCheque = true;
      this.adherentService.addadherent(formData)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);  
      });
    }
    if(this.currentlyChecked === CheckBoxType.espece){
      this.visibleEspece = true;
      const templateParams = {
        to_name: this.AdhesionForm.value.name,
        send_email: this.AdhesionForm.value.email,
      };
      this.adherentService.addadherent(formData)
      .then(() => {
        emailjs.send('service_akidcfv', 'template_kzkb7sj', templateParams, 'bICFAgRyPi_v4z5mc')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
          console.log('FAILED...', error);
        });
      })
      .catch((err) => {
        console.error(err);  
      });
    }
  }

  compris() {
    this.visibleCheque = false;
    this.visibleEspece = false;
    window.location.href = '';
  }
}
