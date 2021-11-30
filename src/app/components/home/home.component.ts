import { ChampionshipsService } from './../../services/championships.service';
import { Championship } from './../../models/championship';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  championships:Championship[];

  constructor(
    private service: ChampionshipsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
}
