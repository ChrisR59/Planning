import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() day;
  activities : Array<any>;

  constructor(private api :ApiService) { }

  ngOnInit() {
    this.GetPlanning();

    this.api.observableActivitiesDay.subscribe((valeur)=> {
      this.GetPlanning();
    })
  }

  GetPlanning = () => {
    this.api.GetPlanning('GetPlanning', {day : this.day}).subscribe((res :any) => {
      if(res){
        this.activities = res;
      }
    })
  }

}
