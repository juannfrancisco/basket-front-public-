import { GameState } from './../../../../models/game-state';
import { Championship } from './../../../../models/championship';
import { Router, ActivatedRoute } from '@angular/router';
import { GamesService } from './../../../../services/games.service';
import { Game } from './../../../../models/game';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  @Input() championship:Championship;
  @Input() gameState:string;

  games:Game[];
  isLoading:boolean= true;

  constructor(
    private service: GamesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadData();
  }


  /**
   * 
   */
  loadData(){
    this.isLoading = true;
    this.service.findAllByState(this.championship.oid, GameState[this.gameState] ).subscribe(data => {
      this.games = data;
      console.log(this.games);
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
    });
  }

  view(game:Game):void{
    this.router.navigateByUrl( this.championship.oid+"/games/"+game.oid )
  }

}
