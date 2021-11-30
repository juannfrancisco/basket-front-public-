import { Router, ActivatedRoute } from '@angular/router';
import { TeamsService } from './../../../services/teams.service';
import { Component, OnInit } from '@angular/core';
import { Team } from '../../../models/team';

@Component({
  selector: 'app-teams-profile-page',
  templateUrl: './teams-profile-page.component.html',
  styleUrls: ['./teams-profile-page.component.css']
})
export class TeamsProfilePageComponent implements OnInit {

  oidChampionship: string;
  oidTeam: string;
  team:Team;
  constructor(
    private service: TeamsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.oidChampionship = this.route.snapshot.paramMap.get('idChampionship');
    this.oidTeam = this.route.snapshot.paramMap.get('idTeam');
    this.loadData();
  }


  /**
   * 
   */
  loadData(){
    //this.showLoading( this.loadingService );
    this.service.findById(this.oidTeam).subscribe(data => {
      this.team = data;
      //this.hideLoading( this.loadingService );
    }, err => {
      //this.hideLoading( this.loadingService );
      //this.showErrorMessage();
    });
  }

}
