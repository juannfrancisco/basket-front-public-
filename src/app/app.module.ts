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
    GameProfileBoxScoreComponent
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
