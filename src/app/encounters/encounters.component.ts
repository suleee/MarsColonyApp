import { Component, OnInit } from '@angular/core';
import { Encounter } from '../models';

import { ENCOUNTERS_URL } from '../models/API';

import { EncountersAPIService } from '../apiService/encounters';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [EncountersAPIService]
})


export class EncountersComponent implements OnInit {

  encounterList: Encounter[];

  constructor(private encountersAPIService: EncountersAPIService) {
    this.getMarsEncounters();
  }

  getMarsEncounters() {
    this.encountersAPIService.getMarsEncounters()
      .subscribe((result) => {
        this.encounterList = result;
      });
  }


  ngOnInit() {

  }
}