import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newColonist: NewColonist;
  marsJobs: Job[];
  registerForm: FormGroup;
  // public fakeColonist;

  constructor() {
    //TODO: Call API, get jobs.
    this.marsJobs = [
      { name: "Alien Hunter", id: 1, description: "hunter" },
      { name: "Yoga Teacher", id: 2, description: "teacher" },
      { name: "Dust Farmer", id: 3, description: "farmer" },
      { name: "Dust Farmer", id: 3, description: "farmer" }
    ];

    this.newColonist = new NewColonist('', '', '');

    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      age: new FormControl('', [Validators.required, this.acceptAge(18, 50)]),
      job_id: new FormControl('', [Validators.required]),
    });
  }

  acceptAge(min: number, max: number) {
    return (control: AbstractControl): { [key: string]: any } => {
      if (control.value < min || control.value > max) {
        return { 'Sorry good luck!': { age: control.value }};
      }
    }
  }

  logColonist() {
    // if(this.newColonist.name === '' || this.newColonist){}
    console.log(this.registerForm);
  }
  ngOnInit() {

  }

}

