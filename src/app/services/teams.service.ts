import { Subject, Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Team } from './../models/team';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  actualTeam:Team;
  eventsTeam = new Subject<Team>();

  constructor( private http: HttpClient ) { }


  findAll(){
    return this.http.get<Team[]>( environment.endpoint +  "teams" );
  }

  findAllByChampionship( oidChampionship:string ){
    return this.http.get<Team[]>( environment.endpoint + "championships/" + oidChampionship + "/teams" );
  }

  findById( oid:string ){
    return this.http.get<Team>( environment.endpoint +  "teams/" + oid );
  }

  deleteById( oid:string ){
    return this.http.delete( environment.endpoint +  "teams/" + oid );
  }

  save( team:Team ){
    return this.http.put( environment.endpoint +  "teams", team );
  }

  update( team:Team ){
    return this.http.post( environment.endpoint +  "teams", team );
  }

  eventTeams():Observable<Team>{
    return this.eventsTeam.asObservable();
  }

  pushGame(data:Team) {
    this.actualTeam = data;
    this.eventsTeam.next(data);
  }

}
