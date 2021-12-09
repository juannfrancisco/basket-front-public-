import { GamesService } from './../../../services/games.service';
import { Game } from './../../../models/game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-profile-stats',
  templateUrl: './game-profile-stats.component.html',
  styleUrls: ['./game-profile-stats.component.css']
})
export class GameProfileStatsComponent implements OnInit {

  game: Game;

  constructor(
    private service: GamesService
  ) { }

  ngOnInit(): void {
    if (this.service.actualGame) {
      this.init(this.service.actualGame);
    } else {
      this.service.eventsGame.subscribe(game => {
        this.init(game);
      });
    }
  }

  init(game:Game){    
    this.game = game;
  }

}
