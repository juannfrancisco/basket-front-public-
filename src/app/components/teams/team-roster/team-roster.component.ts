import { Router, ActivatedRoute } from '@angular/router';
import { TeamsService } from './../../../services/teams.service';
import { Team } from './../../../models/team';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css']
})
export class TeamRosterComponent implements OnInit {

  team:Team;
  constructor(
    private service: TeamsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    if (this.service.actualTeam) {
      this.team = this.service.actualTeam;
    } else {
      this.service.eventsTeam.subscribe(team => {
        this.team = team;
      });
    }
  }

}
