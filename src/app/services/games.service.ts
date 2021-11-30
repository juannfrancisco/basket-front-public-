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

  constructor( private http: HttpClient ) { }


  findAll(){
    return this.http.get<Game[]>( environment.endpoint +  "games" );
  }

  findById( oid:string ){
    return this.http.get<Game>( environment.endpoint +  "games/" + oid );
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


  findStats( oid:string ){
    return this.http.get<GameStat[]>( environment.endpoint +  "games/" + oid + "/stats" );
  }

  saveStat( oid:string, gameStat:GameStat ){
    return this.http.put( environment.endpoint +  "games/" + oid + "/stats" , gameStat);
  }

  findStatsPlayer( oid:string ){
    return this.http.get<GameStatPlayer[]>( environment.endpoint +  "games/" + oid + "/stats-player" );
  }

  findScoreboard( oid:string ){
    return this.http.get<ScoreboardItem[]>( environment.endpoint +  "games/" + oid + "/scoreboard" );
  }

  actualGame = new Subject<Game>();


  eventGames():Observable<Game>{
    return this.actualGame.asObservable();
  }

  pushGame(data:Game) {
    this.actualGame.next(data);
  }
}
