import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activity:string;
  activityPlanning:string;
  day:string;
  activities : Array<string>;

  constructor(private api : ApiService) { }

  ngOnInit() {
    this.api.GetList('GetList').subscribe((res:any) => {
      this.activities = res;
    })
  }

  NewActivity = () => {
    if(this.activity != null) {
      this.api.AddActivity('AddActivity', {name : this.activity}).subscribe((res:any) => {
        if(res){
          this.activity = null;
          this.api.observableActivities.next();
          alert('activité ajouté');
        }
      });
    }
  }

  AddPlanning = () => {
    if(this.activityPlanning != null && this.day != null){
      this.api.AddPlanning('AddPlanning', {id : (this.activities.length + 1), day : this.day, name : this.activityPlanning}).subscribe((res:any) => {
        if(res){
          this.activity = null;
          this.api.observableActivitiesDay.next();
          alert('activité ajouté au planning');
        }
      });
    }
  }

}
