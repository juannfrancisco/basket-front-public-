import { GameStatPlayer } from './../../../../models/game-stat-player';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-matchup',
  templateUrl: './game-matchup.component.html',
  styleUrls: ['./game-matchup.component.css']
})
export class GameMatchupComponent implements OnInit {

  @Input() currentStatsLocal:GameStatPlayer;
  @Input() currentStatsVisitor:GameStatPlayer;
  @Input() isLoading:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
