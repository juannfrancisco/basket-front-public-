import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../../models/team';

@Component({
  selector: 'app-team-heading',
  templateUrl: './team-heading.component.html',
  styleUrls: ['./team-heading.component.css']
})
export class TeamHeadingComponent implements OnInit {


  @Input() team:Team;
  @Input() oidChampionship: string;
  toggleMenu:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.toggleMenu = !this.toggleMenu;
  }

}
