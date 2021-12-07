import { GameProfilePlayByPlayComponent } from './components/games/game-profile-play-by-play/game-profile-play-by-play.component';
import { TeamStandingsComponent } from './components/teams/team-standings/team-standings.component';
import { TeamOverviewComponent } from './components/teams/team-overview/team-overview.component';
import { GameProfileOverviewComponent } from './components/games/game-profile-overview/game-profile-overview.component';
import { GamesPageComponent } from './components/games/games-page/games-page.component';
import { GameProfileBoxScoreComponent } from './components/games/game-profile-box-score/game-profile-box-score.component';
import { GameProfilePageComponent } from './components/game-profile-page/game-profile-page.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsPageComponent } from './components/teams/teams-page/teams-page.component';
import { TeamsProfilePageComponent } from './components/teams/teams-profile-page/teams-profile-page.component';
import { TeamLastResultsComponent } from './components/teams/team-last-results/team-last-results.component';
import { TeamRosterComponent } from './components/teams/team-roster/team-roster.component';
import { TeamScheduleComponent } from './components/teams/team-schedule/team-schedule.component';

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
    component: TeamsProfilePageComponent,
    children:[
      {path: '',component: TeamOverviewComponent},
      {path: 'info',component: TeamOverviewComponent},
      {path: 'last-results',component: TeamLastResultsComponent},
      {path: 'roster',component: TeamRosterComponent},
      {path: 'schedule',component: TeamScheduleComponent},
      {path: 'standings',component: TeamStandingsComponent}
    ]
  },
  {
    path: ':idChampionship/games',
    component: GamesPageComponent
  },
  {
    path: ':idChampionship/games/:idGame',
    component: GameProfilePageComponent,
    children:[
      {path: '',component: GameProfileOverviewComponent},
      {path: 'overview',component: GameProfileOverviewComponent},
      {path: 'box-score',component: GameProfileBoxScoreComponent},
      {path: 'play-by-play',component: GameProfilePlayByPlayComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
