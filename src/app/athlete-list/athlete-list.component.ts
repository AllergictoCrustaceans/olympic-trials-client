import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Athlete} from '../athlete';
import {AthleteService} from '../athlete.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.css']
})
export class AthleteListComponent implements OnInit {
  athletes: Observable<Athlete[]>;

  constructor(private athleteService: AthleteService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.athletes = this.athleteService.getAthleteList();
  }

  deleteAthlete(id: number) {
    this.athleteService.deleteAthlete(id)
      .subscribe(data => {
          console.log(data);
          this.reloadData();
      }, error => console.log(error));
  }

  athleteDetails(id: number) {
    this.router.navigate(['details', id]);
  }

}
