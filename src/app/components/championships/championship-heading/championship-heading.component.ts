import { Championship } from './../../../models/championship';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-championship-heading',
  templateUrl: './championship-heading.component.html',
  styleUrls: ['./championship-heading.component.css']
})
export class ChampionshipHeadingComponent implements OnInit {

  @Input() championship:Championship;
  toggleMenu:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.toggleMenu = !this.toggleMenu;
  }

}
