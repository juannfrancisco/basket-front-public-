import { TypeTeam } from './../../../models/type-team';
import { GameStat } from './../../../models/game-stat';
import { GamesService } from './../../../services/games.service';
import { Game } from './../../../models/game';
import { Component, OnInit } from '@angular/core';
import { Player } from '../../../models/player';

@Component({
  selector: 'app-game-profile-play-by-play',
  templateUrl: './game-profile-play-by-play.component.html',
  styleUrls: ['./game-profile-play-by-play.component.css']
})
export class GameProfilePlayByPlayComponent implements OnInit {

  game: Game;
  currentStats:GameStat[];
  quarter:number;
  stats:Map<number, GameStat[]> = new Map<number, GameStat[]>();

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
    debugger;
    this.game = game;
    this.findStats(1);
  }


  async findStats(quarter:number){
    this.quarter = quarter;
    if( this.stats.has(quarter) ){
      this.currentStats = this.stats.get(quarter);
    }else{
      let stats = await this.service.findStatsByQuarter( this.game.oid, this.game.championship.oid, quarter ).toPromise();
      stats = stats.sort((a, b) => (b.quarterTimeText.localeCompare(a.quarterTimeText)));
      this.currentStats = stats;
      this.calculate( this.currentStats );
      this.stats.set( quarter, stats );
    }
  }

  viewQuarter( quarter:number ){
    this.findStats( quarter );
  }

  calculate(stats:GameStat[]){

    stats.forEach( stat=> {

      let player:Player;
      if(stat.typeTeam == TypeTeam.LOCAL){
        player = this.game.local.players.find( player=> player.oid == stat.oidPlayer );
      }else{
        player = this.game.visitor.players.find( player=> player.oid == stat.oidPlayer );
      }
      stat.player = player;
      console.log(stat);
    });
  }



}
