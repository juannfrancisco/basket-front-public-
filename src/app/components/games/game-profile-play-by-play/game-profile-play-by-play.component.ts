import { GameStatPlayer } from './../../../models/game-stat-player';
import { TypeTeam } from './../../../models/type-team';
import { GameStat } from './../../../models/game-stat';
import { GamesService } from './../../../services/games.service';
import { Game } from './../../../models/game';
import { Component, OnInit } from '@angular/core';
import { Player } from '../../../models/player';
import { TypeStat } from '../../../models/type-stat';

@Component({
  selector: 'app-game-profile-play-by-play',
  templateUrl: './game-profile-play-by-play.component.html',
  styleUrls: ['./game-profile-play-by-play.component.css']
})
export class GameProfilePlayByPlayComponent implements OnInit {

  game: Game;
  currentStats:GameStat[];
  currentStatsLocal:GameStatPlayer;
  currentStatsVisitor:GameStatPlayer;
  // quarter:number;
  // stats:Map<number, GameStat[]> = new Map<number, GameStat[]>();
  isLoading:boolean= true;

  // statsTeamLocal:Map<number, GameStatPlayer> = new Map<number, GameStatPlayer>();
  // statsTeamVisitor:Map<number, GameStatPlayer> = new Map<number, GameStatPlayer>();


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
    // this.findStats(1);
  }

  receiverGameStats( stats:GameStat[]){
    this.currentStats = stats;
  }


  // async findStats(quarter:number){
  //   this.isloading = true;
  //   this.quarter = quarter;
  //   if( this.stats.has(quarter) ){
  //     this.currentStats = this.stats.get(quarter);
  //     this.currentStatsLocal = this.statsTeamLocal.get(quarter);
  //     this.currentStatsVisitor = this.statsTeamVisitor.get(quarter);
  //   }else{
  //     let stats = await this.service.findStatsByQuarter( this.game.oid, this.game.championship.oid, quarter ).toPromise();
  //     stats = stats.sort((a, b) => (b.quarterTimeText.localeCompare(a.quarterTimeText)));
  //     this.currentStats = stats;
  //     this.calculate( this.currentStats );
  //     this.stats.set( quarter, stats );
  //     this.calculateStatsTeam(stats, quarter);
  //   }
  //   this.isloading = false;
  // }

  // viewQuarter( quarter:number ){
  //   this.findStats( quarter );
  // }

  // calculate(stats:GameStat[]){
  //   stats.forEach( stat=> {
  //     let player:Player;
  //     if(stat.typeTeam == TypeTeam.LOCAL){
  //       player = this.game.local.players.find( player=> player.oid == stat.oidPlayer );
  //     }else{
  //       player = this.game.visitor.players.find( player=> player.oid == stat.oidPlayer );
  //     }
  //     stat.player = player;
  //   });
  // }


  // /**
  //  * 
  //  * @param stats 
  //  * @param quarter 
  //  */
  // calculateStatsTeam( stats:GameStat[], quarter ){
  //   let statsTeamLocal:GameStatPlayer= new GameStatPlayer();
  //   let statsTeamVisitor:GameStatPlayer= new GameStatPlayer();
  //   stats.forEach( stat=> {
  //     let flagPts:boolean = false;
  //     if( stat.type == TypeStat.PTS || stat.type == TypeStat.MPT ){
  //       flagPts = true;
  //     }

  //     if(stat.typeTeam == TypeTeam.LOCAL){
  //       let statx = statsTeamLocal[ stat.type.toLocaleLowerCase() ] || 0;
  //       statsTeamLocal[ stat.type.toLocaleLowerCase() ] = statx+ stat.value;
  //       if(flagPts){
  //         let statxx = statsTeamLocal[ stat.type.toLocaleLowerCase() + stat.value ] || 0;
  //         statsTeamLocal[ stat.type.toLocaleLowerCase() + stat.value ] = statxx+ stat.value;
  //       }
        
  //     }else{
  //       let statx = statsTeamVisitor[ stat.type.toLocaleLowerCase() ] || 0;
  //       statsTeamVisitor[ stat.type.toLocaleLowerCase() ] = statx+ stat.value;
  //       if(flagPts){
  //         let statxx = statsTeamVisitor[ stat.type.toLocaleLowerCase() + stat.value ] || 0;
  //         statsTeamVisitor[ stat.type.toLocaleLowerCase() + stat.value ] = statxx+ stat.value;
  //       }
  //     }
  //   });

  //   statsTeamLocal.apts1= this.calculateAttemp( statsTeamLocal.pts1, statsTeamLocal.mpt1 );
  //   statsTeamLocal.apts2= this.calculateAttemp( statsTeamLocal.pts2, statsTeamLocal.mpt2 );
  //   statsTeamLocal.apts3= this.calculateAttemp( statsTeamLocal.pts3, statsTeamLocal.mpt3 );

  //   statsTeamVisitor.apts1= this.calculateAttemp( statsTeamVisitor.pts1, statsTeamVisitor.mpt1 );
  //   statsTeamVisitor.apts2= this.calculateAttemp( statsTeamVisitor.pts2, statsTeamVisitor.mpt2 );
  //   statsTeamVisitor.apts3= this.calculateAttemp( statsTeamVisitor.pts3, statsTeamVisitor.mpt3 );





  //   this.statsTeamLocal.set(  quarter, statsTeamLocal );
  //   this.statsTeamVisitor.set(  quarter, statsTeamVisitor );
  //   this.currentStatsLocal = statsTeamLocal;
  //   this.currentStatsVisitor = statsTeamVisitor;

  //   console.log(statsTeamLocal);
  //   console.log(statsTeamVisitor);
  // }


  // calculateAttemp( pts:number, mpt:number ){
  //   if (pts != 0 || mpt != 0) {
  //     return Math.round((pts * 100) / (pts + mpt))
  //   }
  //   return 0;
  // }




}
