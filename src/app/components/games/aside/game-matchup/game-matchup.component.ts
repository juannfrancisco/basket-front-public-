import { TypeTeam } from './../../../../models/type-team';
import { TypeStat } from './../../../../models/type-stat';
import { GamesService } from './../../../../services/games.service';
import { GameStatPlayer } from './../../../../models/game-stat-player';

import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../../../models/game';
import { GameStat } from '../../../../models/game-stat';

@Component({
  selector: 'app-game-matchup',
  templateUrl: './game-matchup.component.html',
  styleUrls: ['./game-matchup.component.css']
})
export class GameMatchupComponent implements OnInit {

  @Input() game:Game;
  @Input() currentStats:GameStat[];
  @Input() isLoading:boolean = false;
  
  currentStatsLocal:GameStatPlayer;
  currentStatsVisitor:GameStatPlayer;
  
  
  constructor(
    private service: GamesService
  ) { }

  ngOnInit(): void {
    if (this.service.actualGameStats) {
      this.init(this.service.actualGameStats);
    } else {
      this.service.eventsGameStats.subscribe(game => {
        this.init(game);
      });
    }
  }

  init(game:GameStat[]){
    this.currentStats = game;
    this.calculateStatsTeam( this.currentStats );
  }



  calculateStatsTeam( stats:GameStat[] ){
      let statsTeamLocal:GameStatPlayer= new GameStatPlayer();
      let statsTeamVisitor:GameStatPlayer= new GameStatPlayer();
      stats.forEach( stat=> {
        let flagPts:boolean = false;
        if( stat.type == TypeStat.PTS || stat.type == TypeStat.MPT ){
          flagPts = true;
        }
  
        if(stat.typeTeam == TypeTeam.LOCAL){
          let statx = statsTeamLocal[ stat.type.toLocaleLowerCase() ] || 0;
          statsTeamLocal[ stat.type.toLocaleLowerCase() ] = statx+ stat.value;
          if(flagPts){
            let statxx = statsTeamLocal[ stat.type.toLocaleLowerCase() + stat.value ] || 0;
            statsTeamLocal[ stat.type.toLocaleLowerCase() + stat.value ] = statxx+ stat.value;
          }
          
        }else{
          let statx = statsTeamVisitor[ stat.type.toLocaleLowerCase() ] || 0;
          statsTeamVisitor[ stat.type.toLocaleLowerCase() ] = statx+ stat.value;
          if(flagPts){
            let statxx = statsTeamVisitor[ stat.type.toLocaleLowerCase() + stat.value ] || 0;
            statsTeamVisitor[ stat.type.toLocaleLowerCase() + stat.value ] = statxx+ stat.value;
          }
        }
      });
  
      statsTeamLocal.pts3 = statsTeamLocal.pts3 == 0 ? 0 : (statsTeamLocal.pts3/3);
      statsTeamLocal.pts2 = statsTeamLocal.pts2 == 0 ? 0 : (statsTeamLocal.pts2/2);
      statsTeamLocal.mpt3 = statsTeamLocal.mpt3 == 0 ? 0 : (statsTeamLocal.mpt3/3);
      statsTeamLocal.mpt2 = statsTeamLocal.mpt2 == 0 ? 0 : (statsTeamLocal.mpt2/2);
      statsTeamLocal.apts1= this.calculateAttemp( statsTeamLocal.pts1, statsTeamLocal.mpt1 );
      statsTeamLocal.apts2= this.calculateAttemp( statsTeamLocal.pts2, statsTeamLocal.mpt2 );
      statsTeamLocal.apts3= this.calculateAttemp( statsTeamLocal.pts3, statsTeamLocal.mpt3 );
  
      statsTeamVisitor.pts3 = statsTeamVisitor.pts3 == 0 ? 0 : (statsTeamVisitor.pts3/3);
      statsTeamVisitor.pts2 = statsTeamVisitor.pts2 == 0 ? 0 : (statsTeamVisitor.pts2/2);
      statsTeamVisitor.mpt3 = statsTeamVisitor.mpt3 == 0 ? 0 : (statsTeamVisitor.mpt3/3);
      statsTeamVisitor.mpt2 = statsTeamVisitor.mpt2 == 0 ? 0 : (statsTeamVisitor.mpt2/2);
      statsTeamVisitor.apts1= this.calculateAttemp( statsTeamVisitor.pts1, statsTeamVisitor.mpt1 );
      statsTeamVisitor.apts2= this.calculateAttemp( statsTeamVisitor.pts2, statsTeamVisitor.mpt2 );
      statsTeamVisitor.apts3= this.calculateAttemp( statsTeamVisitor.pts3, statsTeamVisitor.mpt3 );
  
  
      this.currentStatsLocal = statsTeamLocal;
      this.currentStatsVisitor = statsTeamVisitor;
  
      console.log(statsTeamLocal);
      console.log(statsTeamVisitor);
    }
  
  
    calculateAttemp( pts:number, mpt:number ){
      if (pts != 0 || mpt != 0) {
        return Math.round((pts * 100) / (pts + mpt))
      }
      return 0;
    }

}
