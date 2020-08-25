import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activity:string;
  activities : Array<string>;

  constructor(private api : ApiService) { }

  ngOnInit() {
  }

  NewActivity = () => {
    if(this.activity != null) {
      this.api.AddActivity('AddActivity', {name : this.activity}).subscribe((res:any) => {
        if(res){
          this.activity = null;
          alert('activité ajouté');
        }
      });
    }
  }

}
