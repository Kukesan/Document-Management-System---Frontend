import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from 'src/app/_interfaces/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  baseUrl="https://localhost:5001/api/Notifications"

  constructor(private http:HttpClient) { }

  getAllNotifications():Observable<Notification[]>{
    return this.http.get<Notification[]>(this.baseUrl);
  } 

  addNotification(notification:Notification):Observable<Notification>{
    parseInt(notification.id);
    return this.http.post<Notification>(this.baseUrl,notification);
  }

  deleteNotification(id:string):Observable<Notification>{
    return this.http.delete<Notification>(this.baseUrl+'/'+id);
  }

  updateNotification(notification:Notification):Observable<Notification>{
    return this.http.put<Notification>(this.baseUrl+'/'+notification.id,notification);
  }
}
