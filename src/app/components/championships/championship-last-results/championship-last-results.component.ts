import { ChampionshipsService } from './../../../services/championships.service';
import { Championship } from './../../../models/championship';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championship-last-results',
  templateUrl: './championship-last-results.component.html',
  styleUrls: ['./championship-last-results.component.css']
})
export class ChampionshipLastResultsComponent implements OnInit {

  championship:Championship;
  constructor(
    private service: ChampionshipsService
  ) { }

  ngOnInit(): void {
    if (this.service.actualChampionship) {
      this.init(this.service.actualChampionship);
    } else {
      this.service.eventsChampionship.subscribe(game => {
        this.init(game);
      });
    }
  }

  init(championship:Championship){    
    this.championship = championship;
  }

}
