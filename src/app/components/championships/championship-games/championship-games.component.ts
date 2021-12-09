import { ChampionshipsService } from './../../../services/championships.service';
import { Championship } from './../../../models/championship';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championship-games',
  templateUrl: './championship-games.component.html',
  styleUrls: ['./championship-games.component.css']
})
export class ChampionshipGamesComponent implements OnInit {

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
