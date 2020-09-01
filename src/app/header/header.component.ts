import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formAddPlanning : FormGroup = new FormGroup({
    activityPlanning : new FormControl(''),
    day : new FormControl('')
  });
  activity: string;
  days : Array<any> = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
  activities: Array<any>;
  idActivity: number;
  idActivityPlanning: number;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.GetList();
    this.api.observableActivities.subscribe((valeur)=> {
      this.GetList();
    })
    
    this.api.GetIdActivityPlanning('GetIdPlanning').subscribe((res:any) => {
      this.idActivityPlanning = res;
    })
  }
  
  NewActivity = () => {
    if (this.activity != null) {
      this.api.AddActivity('AddActivity', { id: this.idActivity, name: this.activity }).subscribe((res: any) => {
        if (!res.error) {
          this.activity = null;
          this.api.observableActivities.next();
          alert('activité ajouté');
        }
      });
    }
  }

  AddPlanning = () => {
    if (this.formAddPlanning.value.activityPlanning != null && this.formAddPlanning.value.day != null) {
      this.api.AddPlanning('AddPlanning', { id: this.idActivityPlanning, day: this.formAddPlanning.value.day, name: this.formAddPlanning.value.activityPlanning }).subscribe((res: any) => {
        if (res) {
          this.activity = null;
          this.idActivityPlanning++;
          this.api.observableActivitiesDay.next();
          alert("L'activité a été ajouté au planning");
        }
      });
    }
  }

  GetList = () => {
    this.api.GetList('GetList').subscribe((res: any) => {
      this.activities = res;

      if(this.activities.length == 0){
        this.idActivity = 1;
      }else{
        this.idActivity = this.activities[this.activities.length-1].id + 1;
      }
    })
  }
}
