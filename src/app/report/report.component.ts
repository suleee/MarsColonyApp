import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NewEncounter, Alien, Colonist } from '../models';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

import { ALIENS_URL, ENCOUNTERS_URL } from '../models/API';

import { EncountersAPIService } from '../apiService/encounters';
import { AliensAPIService } from '../apiService/aliens';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AliensAPIService, EncountersAPIService]
})


export class ReportComponent implements OnInit {

  // newEncounter: NewEncounter;
  alienType: Alien[];
  reportForm: FormGroup;
  clickedButton: boolean;

  constructor(
    private aliensAPIService: AliensAPIService,
    private encountersApiService: EncountersAPIService,
    private router: Router
  ) {

    this.getAlien();

    this.clickedButton = false;

    this.reportForm = new FormGroup({

      atype: new FormControl('', [Validators.required]),
      action: new FormControl('', [Validators.required]),

    });

  }
  logEncounter() { }

  ngOnInit() {

  }
  getAlien() {
    this.aliensAPIService.getAlien()
      .subscribe((result) => {
        this.alienType = result;
        // console.log(this.alienType);
        // console.log(this.reportForm.controls);
      });
  }

  private getDate() {
    const d = new Date();
    return `${d.getFullYear()} - ${d.getMonth() + 1} - ${d.getDate()}`;
  }

  postNewEncounter(event) {
    event.preventDefault();
    if (this.reportForm.invalid) {
      this.clickedButton = true;
      //The form is invalid...
    } else {
      const atype = this.reportForm.get('atype').value;
      const date = this.getDate();
      const action = this.reportForm.get('action').value;
      const colonist_id = localStorage.getItem("colonist_id");

      const newEncounter: NewEncounter = new NewEncounter(date, atype, action, colonist_id);
      const encounterPostRequest = { encounter: newEncounter };

      this.encountersApiService.saveNewEncounter(encounterPostRequest)
        .subscribe((result) => {
          this.router.navigate(['/encounters']);
          console.log('Colonist was saved:', result);
        });

    }
  }
}
