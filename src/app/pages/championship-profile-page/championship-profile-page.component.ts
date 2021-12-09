import { Router, ActivatedRoute } from '@angular/router';
import { ChampionshipsService } from './../../services/championships.service';
import { Championship } from './../../models/championship';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championship-profile-page',
  templateUrl: './championship-profile-page.component.html',
  styleUrls: ['./championship-profile-page.component.css']
})
export class ChampionshipProfilePageComponent implements OnInit {


  oidChampionship: string;
  isLoading: boolean = true;
  championship: Championship;

  constructor(
    private service: ChampionshipsService,
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
  loadData() {
    this.isLoading = true;
    this.service.findById(this.oidChampionship).subscribe(data => {
      this.championship = data;
      this.service.pushChampionship(this.championship);
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
      //this.showErrorMessage();
    });
  }
}
