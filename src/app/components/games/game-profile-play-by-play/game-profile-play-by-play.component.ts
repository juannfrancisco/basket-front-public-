import { GameStat } from './../../../models/game-stat';
import { GamesService } from './../../../services/games.service';
import { Game } from './../../../models/game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-profile-play-by-play',
  templateUrl: './game-profile-play-by-play.component.html',
  styleUrls: ['./game-profile-play-by-play.component.css']
})
export class GameProfilePlayByPlayComponent implements OnInit {

  game: Game;
  stats:GameStat[];

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
    this.findStats();
  }


  async findStats(){
    let gameStats = await this.service.findStatsByQuarter( this.game.oid, this.game.championship.oid, 1 ).toPromise();

  }

}
