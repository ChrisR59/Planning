import { Component, OnInit } from '@angular/core';
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

  DeleteActivity = (a) => {
    this.api.DeleteActivity('DeleteActivity',a).subscribe((res:any) => {
      if(res){
        this.api.observableActivities.next();
        alert('Activité supprimé');
      }
    })
  }
}
