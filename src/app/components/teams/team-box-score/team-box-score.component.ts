import { Team } from './../../../models/team';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-box-score',
  templateUrl: './team-box-score.component.html',
  styleUrls: ['./team-box-score.component.css']
})
export class TeamBoxScoreComponent implements OnInit {


  @Input() team:Team;
  @Input() typeTeam:string;

  constructor() { }

  ngOnInit(): void {
  }

}
