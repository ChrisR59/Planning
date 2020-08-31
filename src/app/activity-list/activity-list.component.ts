import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activities;
  activity;

  constructor(private api : ApiService) { }

  ngOnInit() {
    this.getList();

    this.api.observableActivities.subscribe((valeur)=> {
      this.getList();
    })
  }

  getList = () => {
    this.api.GetList('GetList').subscribe((res:any) => {
      this.activities = res;
    })
  }
}
