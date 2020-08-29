import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activity: string;
  activityPlanning: string;
  day: string;
  activities: Array<string>;
  idActivity: Number;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.GetList();
    this.api.observableActivities.subscribe((valeur)=> {
      this.GetList();
    })
  }
  // probleme inscrementation id + actualisation de la liste
  NewActivity = () => {
    if (this.activity != null) {
      this.api.AddActivity('AddActivity', { id: this.activities.length + 1, name: this.activity }).subscribe((res: any) => {
        if (!res.error) {
          this.activity = null;
          this.api.observableActivities.next();
          alert('activité ajouté');
        }
      });
    }
  }

  AddPlanning = () => {
    if (this.activityPlanning != null && this.day != null) {
      this.api.AddPlanning('AddPlanning', { id: (this.activities.length + 1), day: this.day, name: this.activityPlanning }).subscribe((res: any) => {
        if (res) {
          this.activity = null;
          this.api.observableActivitiesDay.next();
          alert('activité ajouté au planning');
        }
      });
    }
  }

  GetList = () => {
    this.api.GetList('GetList').subscribe((res: any) => {
      this.activities = res;
      this.idActivity = this.activities.length;
    })
  }

}
