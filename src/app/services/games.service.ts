import { ScoreboardItem } from './../models/scoreboard-item';
import { GameStatPlayer } from './../models/game-stat-player';
import { GameStat } from './../models/game-stat';
import { environment } from './../../environments/environment';
import { Game } from './../models/game';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  actualGame:Game;
  eventsGame = new Subject<Game>();

  constructor( private http: HttpClient ) { }


  findAll(oidChampionship:string){
    return this.http.get<Game[]>( environment.endpoint + "championships/" + oidChampionship + "/games" );
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


  eventGames():Observable<Game>{
    return this.eventsGame.asObservable();
  }

  pushGame(data:Game) {
    this.actualGame = data;
    this.eventsGame.next(data);
  }
}
