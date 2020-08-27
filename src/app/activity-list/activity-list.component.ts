import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activities;

  constructor(private api : ApiService) { }

  ngOnInit() {
    this.getContact();

    this.api.observableActivities.subscribe((valeur)=> {
      this.getContact();
    })
  }

  getContact = () => {
    this.api.GetList('GetList').subscribe((res:any) => {
      this.activities = res;
    })
  }

}
