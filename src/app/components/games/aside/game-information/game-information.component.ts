import { Game } from './../../../../models/game';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-information',
  templateUrl: './game-information.component.html',
  styleUrls: ['./game-information.component.css']
})
export class GameInformationComponent implements OnInit {

  @Input() game: Game;
  constructor() { }

  ngOnInit(): void {
  }

}
