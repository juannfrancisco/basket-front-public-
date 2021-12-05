import { Router, ActivatedRoute } from '@angular/router';
import { GamesService } from './../../../services/games.service';
import { Game } from './../../../models/game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  oidChampionship: string;
  games:Game[];

  constructor(
    private service: GamesService,
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
    this.service.findAll(this.oidChampionship).subscribe(data => {
      this.games = data;
      console.log(this.games);
      //this.hideLoading( this.loadingService );
    }, err => {
      //this.hideLoading( this.loadingService );
      //this.showErrorMessage();
    });
  }

  view(game:Game):void{
    this.router.navigateByUrl( this.oidChampionship+"/games/"+game.oid )
  }

}
