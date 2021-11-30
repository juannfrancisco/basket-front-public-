import { GameProfileBoxScoreComponent } from './components/games/game-profile-box-score/game-profile-box-score.component';
import { GameProfilePageComponent } from './components/game-profile-page/game-profile-page.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsPageComponent } from './components/teams/teams-page/teams-page.component';
import { TeamsProfilePageComponent } from './components/teams/teams-profile-page/teams-profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':idChampionship/teams',
    component: TeamsPageComponent
  },
  {
    path: ':idChampionship/teams/:idTeam',
    component: TeamsProfilePageComponent
  },
  {
    path: 'games/:idGame',
    component: GameProfilePageComponent,
    children:[
      {
        path: 'box-score',
        component: GameProfileBoxScoreComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
