import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/commons/header/header.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { HeaderMobileComponent } from './components/commons/header-mobile/header-mobile.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ChampionshipsListComponent } from './components/championships/championships-list/championships-list.component';
import { GameLastResultComponent } from './components/games/game-last-result/game-last-result.component';
import { GameNextComponent } from './components/games/game-next/game-next.component';
import { PlayerFeaturedComponent } from './components/players/player-featured/player-featured.component';
import { ChampionshipsStandingsComponent } from './components/championships/championships-standings/championships-standings.component';
import { GamesListComponent } from './components/games/games-list/games-list.component';
import { TeamsListComponent } from './components/teams/teams-list/teams-list.component';
import { TeamsPageComponent } from './components/teams/teams-page/teams-page.component';
import { TeamsProfilePageComponent } from './components/teams/teams-profile-page/teams-profile-page.component';
import { TeamHeadingComponent } from './components/teams/team-heading/team-heading.component';
import { TeamLastGameComponent } from './components/teams/team-last-game/team-last-game.component';
import { GameProfilePageComponent } from './components/game-profile-page/game-profile-page.component';
import { GameProfileMenuComponent } from './components/games/game-profile-menu/game-profile-menu.component';
import { GameProfileBoxScoreComponent } from './components/games/game-profile-box-score/game-profile-box-score.component';
import { GamesPageComponent } from './components/games/games-page/games-page.component';
import { GameProfileOverviewComponent } from './components/games/game-profile-overview/game-profile-overview.component';
import { TeamOverviewComponent } from './components/teams/team-overview/team-overview.component';
import { TeamRosterComponent } from './components/teams/team-roster/team-roster.component';
import { TeamStandingsComponent } from './components/teams/team-standings/team-standings.component';
import { TeamLastResultsComponent } from './components/teams/team-last-results/team-last-results.component';
import { TeamScheduleComponent } from './components/teams/team-schedule/team-schedule.component';
import { TeamBoxScoreComponent } from './components/teams/team-box-score/team-box-score.component';
import { GameProfilePlayByPlayComponent } from './components/games/game-profile-play-by-play/game-profile-play-by-play.component';
import { LoadingComponent } from './components/commons/loading/loading.component';
import { LoadingNestComponent } from './components/commons/loading-nest/loading-nest.component';
import { GameInformationComponent } from './components/games/game-information/game-information.component';
import { GameTeamStatsComponent } from './components/games/game-team-stats/game-team-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderMobileComponent,
    HomeComponent,
    ChampionshipsListComponent,
    GameLastResultComponent,
    GameNextComponent,
    PlayerFeaturedComponent,
    ChampionshipsStandingsComponent,
    GamesListComponent,
    TeamsListComponent,
    TeamsPageComponent,
    TeamsProfilePageComponent,
    TeamHeadingComponent,
    TeamLastGameComponent,
    GameProfilePageComponent,
    GameProfileMenuComponent,
    GameProfileBoxScoreComponent,
    GamesPageComponent,
    GameProfileOverviewComponent,
    TeamOverviewComponent,
    TeamRosterComponent,
    TeamStandingsComponent,
    TeamLastResultsComponent,
    TeamScheduleComponent,
    TeamBoxScoreComponent,
    GameProfilePlayByPlayComponent,
    LoadingComponent,
    LoadingNestComponent,
    GameInformationComponent,
    GameTeamStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
