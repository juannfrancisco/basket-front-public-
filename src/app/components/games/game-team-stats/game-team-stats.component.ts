import { GamesService } from './../../../services/games.service';
import { GameStatPlayer } from './../../../models/game-stat-player';
import { Game } from './../../../models/game';
import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../../models/player';

@Component({
  selector: 'app-game-team-stats',
  templateUrl: './game-team-stats.component.html',
  styleUrls: ['./game-team-stats.component.css']
})
export class GameTeamStatsComponent implements OnInit {

  @Input() game: Game;
  stats: GameStatPlayer[];
  isLoading:boolean = true;

  
  ptsLocal:number=0;
  ptsVisitor:number=0;
  astLocal:number=0;
  astVisitor:number=0;
  rbLocal:number=0;
  rbVisitor:number=0;
  pfLocal:number=0;
  pfVisitor:number=0;
  blkLocal:number=0;
  blkVisitor:number=0;

  constructor(
    private service: GamesService
  ) { }

  ngOnInit(): void {
    this.getStatsPlayer(this.game);
  }

  async getStatsPlayer(game: Game) {
    try {
      this.isLoading = true;
      this.stats = await this.service.findStatsPlayer(game.oid, game.championship.oid).toPromise();
      this.sumarize( this.stats );
      //this.initPlayers(game.local.players, this.stats);
      //this.initPlayers(game.visitor.players, this.stats);
      this.isLoading = false;
    } catch (err) {
      this.isLoading = false;
      console.log(err);
    }
  }


  sumarize(stats: GameStatPlayer[]){
    stats.forEach(stat => {
      if(stat.oidTeam == this.game.local.oid ){
        this.ptsLocal = this.ptsLocal + stat.pts;
        this.astLocal = this.astLocal + stat.ast;
        this.blkLocal= this.blkLocal + stat.blk;
        this.pfLocal= this.pfLocal + stat.pf;
        this.rbLocal= this.rbLocal + stat.dr + stat.or;
      }else{
        this.ptsVisitor = this.ptsVisitor + stat.pts;
        this.astVisitor = this.astVisitor + stat.ast;
        this.blkVisitor= this.blkVisitor + stat.blk;
        this.pfVisitor= this.pfVisitor + stat.pf;
        this.rbVisitor= this.rbVisitor + stat.dr + stat.or;
      }
    });
  }


  /**
   * 
   * @param players 
   */
  initPlayers(players: Player[], stats:GameStatPlayer[]):void {

    players.forEach(player => {
      stats.forEach(stat => {
        if (player.oid === stat.oidPlayer) {
          stat.apts1 = 0;
          stat.apts2 = 0;
          stat.apts3 = 0;
          if (stat.pts1 != 0 || stat.mpt1 != 0) {
            stat.apts1 = Math.round((stat.pts1 * 100) / (stat.pts1 + stat.mpt1))
          }
          if (stat.pts2 != 0 || stat.mpt2 != 0) {
            stat.apts2 = Math.round((stat.pts2 * 100) / (stat.pts2 + stat.mpt2))
          }
          if (stat.pts3 != 0 || stat.mpt3 != 0) {
            stat.apts3 = Math.round((stat.pts3 * 100) / (stat.pts3 + stat.mpt3))
          }
          player.stats = stat;
        }
      });
    });
    
  }

}
