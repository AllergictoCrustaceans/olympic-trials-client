import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AthleteService {
  private baseUrl = 'http://localhost:8080/ot-crud/api/v1/athletes';

  constructor(private http: HttpClient) { }

  getAthlete(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAthlete(athlete: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, athlete);
  }

  updateAthlete(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAthlete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getAthleteList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
