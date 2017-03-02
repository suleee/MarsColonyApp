import { Component, OnInit } from '@angular/core';
import { NewEncounter, Alien } from '../models';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  newEncounter: NewEncounter;
  alienType: Alien[];
  reportForm: FormGroup;
  // public fakeColonist;

  constructor() {
    //TODO: Call API, get jobs.
    this.alienType = [
      { type: "Alien Hunter", id: 1, submitted_by: '12', description: "hunter" },
       { type: "", id: 1, submitted_by: '12', description: "hunter" },
        { type: "Alien Hunter", id: 1, submitted_by: '12', description: "hunter" },

    ];


    this.reportForm = new FormGroup({
      type: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      atype: new FormControl('', [Validators.required]),
      action: new FormControl('', [Validators.required]),
      colonist_id: new FormControl('', [Validators.required]),
    });
  }

  logColonist() {
    // if(this.newColonist.name === '' || this.newColonist){}
    console.log(this.reportForm.controls);
  }
  ngOnInit() {

  }

}

