import { Team } from './../../../models/team';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamsService } from './../../../services/teams.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  oidChampionship: string;
  teams:Team[];

  constructor(
    private service: TeamsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.oidChampionship = this.route.snapshot.paramMap.get('idChampionship');
    this.loadData();
  }

  /**
   * 
   */
  loadData(){
    //this.showLoading( this.loadingService );
    this.service.findAllByChampionship(this.oidChampionship).subscribe(data => {
      this.teams = data;
      console.log(this.teams)
      //this.hideLoading( this.loadingService );
    }, err => {
      //this.hideLoading( this.loadingService );
      //this.showErrorMessage();
    });
  }


  view(e:Team){
    this.router.navigate( ['/app','championships',e.oid, 'teams', e.oid] );
  }

}
