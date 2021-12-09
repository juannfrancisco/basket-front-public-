import { Championship } from './../../../models/championship';
import { ChampionshipsService } from './../../../services/championships.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championship-teams',
  templateUrl: './championship-teams.component.html',
  styleUrls: ['./championship-teams.component.css']
})
export class ChampionshipTeamsComponent implements OnInit {

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
