import { Component, OnInit } from '@angular/core';
import {Athlete} from '../athlete';
import {AthleteService} from '../athlete.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-athlete',
  templateUrl: './create-athlete.component.html',
  styleUrls: ['./create-athlete.component.css']
})
export class CreateAthleteComponent implements OnInit {

  athlete: Athlete = new Athlete();
  submitted = false;

  constructor(private athleteService: AthleteService, private router: Router) { }

  // what this for
  ngOnInit(): void {
  }

  newAthlete(): void {
    this.submitted = false;
    this.athlete = new Athlete();
  }

  save() {
    this.athleteService.createAthlete(this.athlete)
      .subscribe(data => console.log(data), error => console.log(error));
    this.athlete = new Athlete();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/athletes']);
  }
}
