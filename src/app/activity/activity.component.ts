import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  @Input() activity;

  constructor(private api : ApiService) { }

  ngOnInit() {
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
