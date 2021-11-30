import { Game } from './../../../models/game';
import { Team } from './../../../models/team';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-last-game',
  templateUrl: './team-last-game.component.html',
  styleUrls: ['./team-last-game.component.css']
})
export class TeamLastGameComponent implements OnInit {

  @Input() team:Team;
  @Input() oidChampionship: string;
  game:Game;

  constructor() { }

  ngOnInit(): void {
  }

}
