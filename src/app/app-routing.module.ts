import { ChampionshipLastResultsComponent } from './components/championships/championship-last-results/championship-last-results.component';
import { GameProfileStatsComponent } from './components/games/game-profile-stats/game-profile-stats.component';
import { ChampionshipOverviewComponent } from './components/championships/championship-overview/championship-overview.component';
import { ChampionshipGamesComponent } from './components/championships/championship-games/championship-games.component';
import { ChampionshipTeamsComponent } from './components/championships/championship-teams/championship-teams.component';
import { ChampionshipProfilePageComponent } from './pages/championship-profile-page/championship-profile-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GameProfilePlayByPlayComponent } from './components/games/game-profile-play-by-play/game-profile-play-by-play.component';
import { TeamStandingsComponent } from './components/teams/team-standings/team-standings.component';
import { TeamOverviewComponent } from './components/teams/team-overview/team-overview.component';
import { GameProfileOverviewComponent } from './components/games/game-profile-overview/game-profile-overview.component';
import { GamesPageComponent } from './components/games/games-page/games-page.component';
import { GameProfileBoxScoreComponent } from './components/games/game-profile-box-score/game-profile-box-score.component';
import { GameProfilePageComponent } from './pages/game-profile-page/game-profile-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsPageComponent } from './components/teams/teams-page/teams-page.component';
import { TeamProfilePageComponent } from './pages/team-profile-page/team-profile-page.component';
import { TeamLastResultsComponent } from './components/teams/team-last-results/team-last-results.component';
import { TeamRosterComponent } from './components/teams/team-roster/team-roster.component';
import { TeamScheduleComponent } from './components/teams/team-schedule/team-schedule.component';

const routes: Routes = [
  {path: '',component: HomePageComponent},
  {path: ':idChampionship',component: ChampionshipProfilePageComponent, children:[
    {path: '',redirectTo:'overview', pathMatch: 'full'},
    {path: 'overview',component: ChampionshipOverviewComponent},
    {path: 'teams',component: ChampionshipTeamsComponent},
    {path: 'games',component: ChampionshipGamesComponent},
    {path: 'last-results',component: ChampionshipLastResultsComponent},
  ]},
  {path: ':idChampionship/teams',component: TeamsPageComponent},
  {path: ':idChampionship/games',component: GamesPageComponent},
  {path: ':idChampionship/teams/:idTeam',
    component: TeamProfilePageComponent,
    children:[
      {path: '', redirectTo:'info', pathMatch: 'full' },
      {path: 'info',component: TeamOverviewComponent},
      {path: 'last-results',component: TeamLastResultsComponent},
      {path: 'roster',component: TeamRosterComponent},
      {path: 'schedule',component: TeamScheduleComponent},
      {path: 'standings',component: TeamStandingsComponent}
    ]
  },
  {path: ':idChampionship/games/:idGame',component: GameProfilePageComponent,
    children:[
      {path: '', redirectTo:'overview', pathMatch: 'full' },
      {path: 'overview',component: GameProfileOverviewComponent},
      {path: 'box-score',component: GameProfileBoxScoreComponent},
      {path: 'play-by-play',component: GameProfilePlayByPlayComponent},
      {path: 'stats',component: GameProfileStatsComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
