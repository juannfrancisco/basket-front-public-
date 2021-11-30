import { GameStatPlayer } from './../../../models/game-stat-player';
import { Game } from './../../../models/game';
import { GamesService } from './../../../services/games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-profile-box-score',
  templateUrl: './game-profile-box-score.component.html',
  styleUrls: ['./game-profile-box-score.component.css']
})
export class GameProfileBoxScoreComponent implements OnInit {

  game:Game;

  constructor(
    private service: GamesService
  ) { }

  ngOnInit(): void {
    this.service.actualGame.subscribe(game=>{
      this.game = game;
      this.getStatsPlayer( game );
    });
  }


  async getStatsPlayer( game:Game )
  {
    let stats:GameStatPlayer[] = await this.service.findStatsPlayer( game.oid ).toPromise();
    game.local.players.forEach( player =>{
      stats.forEach( stat =>{
        if( player.oid === stat.oidPlayer ){
          stat.apts1 = 0;
          stat.apts2 = 0;
          stat.apts3 = 0;
          if( stat.pts1 != 0 || stat.mpt1 != 0 ){
            stat.apts1 =  Math.round(  (stat.pts1*100) / (stat.pts1+stat.mpt1) )
          }
          if( stat.pts2 != 0 || stat.mpt2 != 0 ){
            stat.apts2 = Math.round( (stat.pts2*100) / (stat.pts2+stat.mpt2) )
          }
          if( stat.pts3 != 0 || stat.mpt3 != 0 ){
            stat.apts3 = Math.round( (stat.pts3*100) / (stat.pts3+stat.mpt3) )
          }
          player.stats = stat;
        }
      } );
    } );

  }
}
