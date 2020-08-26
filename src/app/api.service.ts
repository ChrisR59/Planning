import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlBase = "http://localhost:8085/";

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
}
