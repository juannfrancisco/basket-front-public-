import { GameStatTeam } from './../models/game-stat-team';
import { GameState } from './../models/game-state';
import { ScoreboardItem } from './../models/scoreboard-item';
import { GameStatPlayer } from './../models/game-stat-player';
import { GameStat } from './../models/game-stat';
import { environment } from './../../environments/environment';
import { Game } from './../models/game';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  actualGame:Game;
  actualGameStats:GameStat[];
  eventsGame = new Subject<Game>();
  eventsGameStats = new Subject<GameStat[]>();

  constructor( private http: HttpClient ) { }


  findAll(oidChampionship:string){
    return this.http.get<Game[]>( environment.endpoint + "championships/" + oidChampionship + "/games" );
  }


  findAllByState(oidChampionship:string, state:GameState){
    let params = new HttpParams();
    params = params.append('state', state);
    return this.http.get<Game[]>( environment.endpoint + "championships/" + oidChampionship + "/games", {params:params} );
  }

  findById( oid:string , oidChampionship:string){
    return this.http.get<Game>( environment.endpoint  + "championships/" + oidChampionship + "/games/" + oid );
  }

  deleteById( oid:string ){
    return this.http.delete( environment.endpoint +  "games/" + oid );
  }

  save( game:Game ){
    return this.http.put( environment.endpoint +  "games", game );
  }

  update( game:Game ){
    return this.http.post( environment.endpoint +  "games", game );
  }

  updateState( game:Game ){
    return this.http.post( environment.endpoint +  "games/"+game.oid+"/state", game );
  }


  findStats( oid:string, oidChampionship:string ){
    return this.http.get<GameStat[]>( environment.endpoint + "championships/" + oidChampionship+  "/games/" + oid + "/stats" );
  }

  findStatsByQuarter( oid:string, oidChampionship:string, quarter:number ){
    return this.http.get<GameStat[]>( environment.endpoint + "championships/" + oidChampionship+  "/games/" + oid + "/stats/"+ quarter );
  }

  saveStat( oid:string, gameStat:GameStat ){
    return this.http.put( environment.endpoint +  "games/" + oid + "/stats" , gameStat);
  }

  findStatsPlayer( oid:string, oidChampionship:string ){
    return this.http.get<GameStatPlayer[]>( environment.endpoint + "championships/" + oidChampionship + "/games/" + oid + "/stats-player" );
  }

  findScoreboard( oid:string, oidChampionship:string ){
    return this.http.get<ScoreboardItem[]>( environment.endpoint +"championships/" + oidChampionship + "/games/"  + oid + "/scoreboard" );
  }

  findStatsTeam( oid:string, oidChampionship:string ){
    return this.http.get<GameStatTeam[]>( environment.endpoint + "championships/" + oidChampionship + "/games/" + oid + "/stats-team" );
  }

  eventGames():Observable<Game>{
    return this.eventsGame.asObservable();
  }

  pushGame(data:Game) {
    this.actualGame = data;
    this.eventsGame.next(data);
  }

  pushGameStats(data:GameStat[]) {
    this.actualGameStats = data;
    this.eventsGameStats.next(data);
  }

  
}
