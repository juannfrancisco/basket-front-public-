import { GameState } from './../../../models/game-state';
import { Championship } from './../../../models/championship';
import { Team } from './../../../models/team';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamsService } from './../../../services/teams.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  @Input() championship:Championship;
  //oidChampionship: string;
  teams:Team[];
  isLoading:boolean;

  constructor(
    private service: TeamsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //this.oidChampionship = this.route.snapshot.paramMap.get('idChampionship');
    this.loadData();
  }

  /**
   * 
   */
  loadData(){
    //this.showLoading( this.loadingService );]
    this.isLoading = true;
    this.service.findAllByChampionship(this.championship.oid).subscribe(data => {
      this.teams = data;
      console.log(this.teams)
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
      //this.showErrorMessage();
    });
  }


  view(e:Team){
    this.router.navigate( ['/app','championships',e.oid, 'teams', e.oid] );
  }

}
