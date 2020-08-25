import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlBase = "http://localhost:8085/";

  constructor(private http : HttpClient) { }
  test = (data) => {
  }

  AddActivity = (link,data) => {
    return this.http.post(this.urlBase + link, data);
  }
}
