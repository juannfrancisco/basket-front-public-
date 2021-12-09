import { ScoreboardItem } from './../../models/scoreboard-item';
import { constants } from './../../../environments/constants';
import { PlayersService } from './../../services/players.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GamesService } from './../../services/games.service';
import { GameStat } from './../../models/game-stat';
import { Game } from './../../models/game';
import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player';
import { GameStatPlayer } from '../../models/game-stat-player';

@Component({
  selector: 'app-game-profile-page',
  templateUrl: './game-profile-page.component.html',
  styleUrls: ['./game-profile-page.component.css']
})
export class GameProfilePageComponent implements OnInit {

  oidChampionship: string;
  element:Game = new Game();
  localStats: GameStat[] = [];
  visitorStats: GameStat[] = [];
  gameStats:GameStat[]=[];
  isLoading:boolean;

  scoreboard:ScoreboardItem[] = [];

  constructor(
    private service: GamesService,
    private servicePlayers: PlayersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let oidURL = this.route.snapshot.paramMap.get('idGame');
    this.oidChampionship = this.route.snapshot.paramMap.get('idChampionship');
    this.findById( oidURL );
  }


  /**
   * 
   * @param oidURL 
   */
  async findById( oidURL ){
    try{
      this.element = await this.service.findById(oidURL, this.oidChampionship ).toPromise();
      this.element.local.players = await this.servicePlayers.findAllByTeam( this.element.local.oid ).toPromise();
      this.element.visitor.players = await this.servicePlayers.findAllByTeam( this.element.visitor.oid ).toPromise();
      this.element.local.players = this.initPlayers(this.element.local.players);
      this.element.visitor.players = this.initPlayers(this.element.visitor.players);
      this.service.pushGame(this.element);
      
      this.scoreboard = await this.service.findScoreboard( this.element.oid, this.element.championship.oid ).toPromise();
      this.scoreboard = this.scoreboard.sort((a, b) => (a.quarter < b.quarter ? -1 : 1));

      this.isLoading = true;

    }catch(e){
      alert("Error");
    }
  }

  /**
   * 
   * @param players 
   */
  initPlayers(players: Player[]): Player[] {
    players.forEach(player => {
      player.position = constants[player.position];
      //player.stats = new GameStatPlayer();
    });
    return players.sort((a, b) => (a.number < b.number ? -1 : 1));
  }


  findPlayer(list:Player[], oid:string){
    let playerfind:Player;
    list.forEach( player=>{ 
      if( player.oid == oid ){
        playerfind = player;
        return player;
      }
     } );
    return playerfind;
  }



}
