import { Component, OnInit } from '@angular/core';
import {Athlete} from '../athlete';
import {ActivatedRoute, Router} from '@angular/router';
import {AthleteService} from '../athlete.service';

@Component({
  selector: 'app-update-athlete',
  templateUrl: './update-athlete.component.html',
  styleUrls: ['./update-athlete.component.css']
})
export class UpdateAthleteComponent implements OnInit {
  id: number;
  athlete: Athlete;
  submitted: any;

  constructor(private route: ActivatedRoute, private router: Router, private athleteService: AthleteService) { }

  ngOnInit() {
    this.athlete = new Athlete();
    this.id = this.route.snapshot.params['id'];
    this.athleteService.getAthlete(this.id)
      .subscribe(data => {
        console.log(data);
        this.athlete = data;
      }, error => console.log(error));
  }

  updateAthlete() {
    this.athleteService.updateAthlete(this.id, this.athlete)
      .subscribe(data => console.log(data), error => console.log(error));
    this.athlete = new Athlete();
    this.gotoList();
  }

  onSubmit() {
    this.updateAthlete();
  }

  gotoList() {
    this.router.navigate(['/athletes']);
  }
}
