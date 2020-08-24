import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-list',
  templateUrl: './day-list.component.html',
  styleUrls: ['./day-list.component.css']
})
export class DayListComponent implements OnInit {
  days : Array<String> = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];

  constructor() { }

  ngOnInit() {
  }

}
