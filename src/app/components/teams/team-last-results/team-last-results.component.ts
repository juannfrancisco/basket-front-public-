import { GameTeam } from './../../../models/game-team';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamsService } from './../../../services/teams.service';
import { Team } from './../../../models/team';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-last-results',
  templateUrl: './team-last-results.component.html',
  styleUrls: ['./team-last-results.component.css']
})
export class TeamLastResultsComponent implements OnInit {

  team:Team;
  games:GameTeam[];
  oidChampionship:string;

  constructor(
    private service: TeamsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.oidChampionship = this.route.snapshot.paramMap.get('idChampionship');

    if (this.service.actualTeam) {
      this.init( this.service.actualTeam );
    } else {
      this.service.eventsTeam.subscribe(team => {
        this.init( team );
      });
    }
  }

  init( team:Team ){
    this.team = team;
    this.findGames();
  }

  async findGames(){
    this.games = await this.service.findsGames( this.team.oid ).toPromise();
  }


  viewGame(game:GameTeam){
    this.router.navigate([ "/", this.team.oidChampionship, 'games', game.game ] );
  }

}
