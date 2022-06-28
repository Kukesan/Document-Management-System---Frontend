import { Component, OnInit } from '@angular/core';
import { UseractivityService } from 'src/app/shared/services/useractivity.service';
import { UserActivity } from 'src/app/_interfaces/useractivity.model';

@Component({
  selector: 'app-useractivity',
  templateUrl: './useractivity.component.html',
  styleUrls: ['./useractivity.component.css']
})
export class UseractivityComponent implements OnInit {

  constructor(private useractivityService : UseractivityService) { }

  useractivitys : UserActivity[] = [];
  useractivity: UserActivity = {
    id: 0,
    userEmail: '',
    loginTime: '',
    logoutTime: ''
  }

  ngOnInit(): void {
    this.getAllUserActivities();
  }
  
  getAllUserActivities(){
    this.useractivityService.getAllUserActivities()
    .subscribe(
      response =>{
        this.useractivitys=response;
      }
    )
  }

}
