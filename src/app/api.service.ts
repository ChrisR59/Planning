import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlBase = "http://localhost:8085/";
  //ecouteur
  observableActivities : Subject<any> = new Subject<any>();
  observableActivitiesDay : Subject<any> = new Subject<any>();

  constructor(private http : HttpClient) { }
  
  /*
  * List activities
  */
  GetList = (link) => {
    return this.http.get(this.urlBase + link);
  }

  /*
  * List activities in the planning
  */
  GetPlanning = (link,data) => {
    return this.http.post(this.urlBase + link, data);
  }

  GetIdActivityPlanning = (link) => {
    return this.http.get(this.urlBase + link);
  }

  /*
  * add actitivy in the planning
  */
  AddPlanning = (link,data) => {
    return this.http.post(this.urlBase + link, data);
  }

  /*
  * add activity
  */
  AddActivity = (link,data) => {
    return this.http.post(this.urlBase + link, data);
  }

  /*
  * delete activity
  */
  DeleteActivity = (link,data) => {
    return this.http.post(this.urlBase + link, data);
  }
}
