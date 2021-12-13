import { GameStatTeam } from './../../../../models/game-stat-team';
import { GamesService } from './../../../../services/games.service';
import { GameStatPlayer } from './../../../../models/game-stat-player';
import { Game } from './../../../../models/game';
import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../../../models/player';

@Component({
  selector: 'app-game-team-stats',
  templateUrl: './game-team-stats.component.html',
  styleUrls: ['./game-team-stats.component.css']
})
export class GameTeamStatsComponent implements OnInit {

  @Input() game: Game;
  isLoading: boolean = true;
  stats:GameStatTeam[];
  statsLocal:GameStatTeam;
  statsVisitor:GameStatTeam;

  constructor(
    private service: GamesService
  ) { }

  ngOnInit(): void {
    this.getStatsTeam(this.game);
  }

  async getStatsTeam(game: Game) {
    try {
      this.isLoading = true;
      this.stats = await this.service.findStatsTeam(game.oid, game.championship.oid).toPromise();
      
      this.statsLocal = this.stats[0].oidTeam == game.local.oid? this.stats[0]:this.stats[1];
      this.statsVisitor = this.stats[0].oidTeam == game.visitor.oid? this.stats[0]:this.stats[1];

      this.initPlayers(this.statsLocal);
      this.initPlayers(this.statsVisitor);


      this.isLoading = false;
    } catch (err) {
      this.isLoading = false;
      console.log(err);
    }
  }


  /**
   * 
   * @param players 
   */
  initPlayers(stats:GameStatTeam): void {
    if( stats.oidPlayerHIPoints ){
      let player = this.game.local.players.find( player=> player.oid == stats.oidPlayerHIPoints.oidPlayer );
      stats.oidPlayerHIPoints.player = player;
    }

    if( stats.oidPlayerHIRebounds ){
      let player = this.game.local.players.find( player=> player.oid == stats.oidPlayerHIRebounds.oidPlayer );
      stats.oidPlayerHIRebounds.player = player;
    }

    if( stats.oidPlayerHIAssists ){
      let player = this.game.local.players.find( player=> player.oid == stats.oidPlayerHIAssists.oidPlayer );
      stats.oidPlayerHIAssists.player = player;
    }
    
  }


}
