import { Subject, Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Championship } from './../models/championship';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipsService {

  actualChampionship:Championship;
  eventsChampionship = new Subject<Championship>();

  constructor( private http: HttpClient ) { }


  findAll(){
    return this.http.get<Championship[]>( environment.endpoint +  "championships" );
  }

  findById( oid:string ){
    return this.http.get<Championship>( environment.endpoint +  "championships/" + oid );
  }

  deleteById( oid:string ){
    return this.http.delete( environment.endpoint +  "championships/" + oid );
  }

  save( championship:Championship ){
    return this.http.put( environment.endpoint +  "championships", championship );
  }

  update( championship:Championship ){
    return this.http.post( environment.endpoint +  "championships", championship );
  }

  eventChampionship():Observable<Championship>{
    return this.eventsChampionship.asObservable();
  }

  pushChampionship(data:Championship) {
    this.actualChampionship = data;
    this.eventsChampionship.next(data);
  }
}
