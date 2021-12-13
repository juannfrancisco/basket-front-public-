import { TypeStat } from './../../../../models/type-stat';
import { TypeTeam } from './../../../../models/type-team';
import { GamesService } from './../../../../services/games.service';
import { GameStat } from './../../../../models/game-stat';
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Game } from '../../../../models/game';
import { Player } from '../../../../models/player';

@Component({
  selector: 'app-game-play-by-play',
  templateUrl: './game-play-by-play.component.html',
  styleUrls: ['./game-play-by-play.component.css']
})
export class GamePlayByPlayComponent implements OnInit {

  @Input() game:Game;
  @Output() eventGameStats:EventEmitter< GameStat[]> = new EventEmitter<GameStat[]>();
  isLoading:boolean= true;
  quarter:number = 1;
  stats:Map<number, GameStat[]> = new Map<number, GameStat[]>();
  currentStats:GameStat[];

  constructor(
    private service: GamesService
  ) { }

  ngOnInit(): void {
    this.viewQuarter(this.quarter);
  }

  viewQuarter( quarter:number ){
    this.findStats( quarter );
  }

  async findStats(quarter:number){
    this.isLoading = true;
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
    this.isLoading = false;
    this.service.pushGameStats( this.currentStats );
    this.eventGameStats.emit( this.currentStats );
  }

  calculate(stats:GameStat[]){
    let scoreLocal:number=0;
    let scoreVisitor:number=0;

    stats.forEach( stat=> {
      let player:Player;
      if(stat.type == TypeStat.PTS){
        scoreLocal = scoreLocal + (stat.typeTeam == TypeTeam.LOCAL?stat.value:0);
        scoreVisitor = scoreVisitor + (stat.typeTeam == TypeTeam.VISITOR?stat.value:0);
      }

      stat.scoreText = `${scoreLocal} - ${scoreVisitor}`;

      if(stat.typeTeam == TypeTeam.LOCAL){
        player = this.game.local.players.find( player=> player.oid == stat.oidPlayer );
      }else{
        player = this.game.visitor.players.find( player=> player.oid == stat.oidPlayer );
      }
      stat.player = player;
    });
  }

}
