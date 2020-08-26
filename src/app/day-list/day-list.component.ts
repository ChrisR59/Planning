import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-day-list',
  templateUrl: './day-list.component.html',
  styleUrls: ['./day-list.component.css']
})
export class DayListComponent implements OnInit {
  days : Array<String> = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
  activities : Array<any>;
  activitiesDay : Array <any>;

  constructor(private api : ApiService) { }

  ngOnInit() {
  }

  nomatrouver = () => {
    
  }

}
