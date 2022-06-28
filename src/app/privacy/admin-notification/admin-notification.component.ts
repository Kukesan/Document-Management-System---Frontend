import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Notification } from 'src/app/_interfaces/notification.model';

@Component({
  selector: 'app-admin-notification',
  templateUrl: './admin-notification.component.html',
  styleUrls: ['./admin-notification.component.css']
})
export class AdminNotificationComponent implements OnInit {

  constructor(private notificationService : NotificationService,public datepipe:DatePipe) { }

  form: any = {};
  notifications : Notification[] = [];
  notification : Notification={
    id:0,
    message:'',
    createdDate:this.datepipe.transform((new Date),'MM/dd/yyyy h:mm:ss')
  }

  ngOnInit(): void {
    this.getAllNotifications();
  }


  submitMsg: boolean = false;
  updateMsg:boolean=false;
  addNotification(){
    //this.notification.createdDate=this.datepipe.transform((new Date),'MM/dd/yyyy h:mm:ss');
    if(this.notification.id===0){
      this.notificationService.addNotification(this.notification)
      .subscribe(
        (response: any)=>{
          this.getAllNotifications();
          this.notification.message='';
          this.submitMsg= true;
        }
      )
    }else{
      this.updateNotification(this.notification);
      this.updateMsg=true;
    }
  }
  getAllNotifications(){
    this.notificationService.getAllNotifications()
    .subscribe(
      response =>{
        this.notifications=response;
      }
    )
  }

  deleteNotification(id:string){
    this.notificationService.deleteNotification(id)
    .subscribe(
      response=>{
        this.getAllNotifications();
      }
    )
  }

  pop(notification: Notification){
    this.notification=notification;
  }

  
  updateNotification(notification:Notification){
    this.notificationService.updateNotification(notification)
    .subscribe(
      response =>{
        this.getAllNotifications();
      }
    )
  }

}
