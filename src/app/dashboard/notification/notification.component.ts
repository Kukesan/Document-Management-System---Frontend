import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Notification } from 'src/app/_interfaces/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private notificationService : NotificationService) { }

  notifications : Notification[] = [];

  ngOnInit(): void {
    this.getAllNotifications();
  }
  
  getAllNotifications(){
    this.notificationService.getAllNotifications()
    .subscribe(
      response =>{
        this.notifications=response;
      }
    )
  }
}
