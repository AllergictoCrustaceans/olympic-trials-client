import { Component, OnInit } from '@angular/core';
import {Athlete} from '../athlete';
import {ActivatedRoute, Router} from '@angular/router';
import {AthleteService} from '../athlete.service';

@Component({
  selector: 'app-athlete-details',
  templateUrl: './athlete-details.component.html',
  styleUrls: ['./athlete-details.component.css']
})
export class AthleteDetailsComponent implements OnInit {
  id: number;
  athlete: Athlete;

  constructor(private route: ActivatedRoute, private router: Router, private athleteService: AthleteService) { }

  ngOnInit() {
    this.athlete = new Athlete();
    this.id = this.route.snapshot.params['id']; // wtf is snapshot
    this.athleteService.getAthlete(this.id)
      .subscribe(data => {
        console.log(data);
        this.athlete = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['athletes']);
  }
}
