import { Router } from '@angular/router';
import { ChampionshipsService } from './../../../../services/championships.service';
import { Championship } from './../../../../models/championship';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships-list',
  templateUrl: './championships-list.component.html',
  styleUrls: ['./championships-list.component.css']
})
export class ChampionshipsListComponent implements OnInit {

  championships:Championship[];
  isLoading:boolean=true;

  constructor( 
    private service: ChampionshipsService,
    private router: Router) { }

    ngOnInit(): void {
      this.loadData();
    }
  
  
    /**
     * 
     */
    loadData(){
      this.isLoading = true;
      this.service.findAll().subscribe(data => {
        this.championships = data;
        this.isLoading = false;
      }, err => {
        this.isLoading = false;
        //this.showErrorMessage();
      });
    }
  
  
    view(e:Championship){
      this.router.navigate( ['/app','championships',e.oid, 'profile'] );
    }
}
