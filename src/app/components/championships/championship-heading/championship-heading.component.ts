import { Championship } from './../../../models/championship';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-championship-heading',
  templateUrl: './championship-heading.component.html',
  styleUrls: ['./championship-heading.component.css']
})
export class ChampionshipHeadingComponent implements OnInit {

  @Input() championship:Championship;
  constructor() { }

  ngOnInit(): void {
  }

}
