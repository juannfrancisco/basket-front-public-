import { Game } from './../../../models/game';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-profile-menu',
  templateUrl: './game-profile-menu.component.html',
  styleUrls: ['./game-profile-menu.component.css']
})
export class GameProfileMenuComponent implements OnInit {

  @Input() game:Game;
  toggleMenu:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.toggleMenu = !this.toggleMenu;
  }

}
