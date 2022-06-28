import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserActivity } from 'src/app/_interfaces/useractivity.model';

@Injectable({
  providedIn: 'root'
})
export class UseractivityService {

  constructor(private http: HttpClient) { }

    baseUrl = "https://localhost:5001/api/UserActivities"

    addActivity(activity:UserActivity):Observable<UserActivity>{
        parseInt(activity.id);
        return this.http.post<UserActivity>(this.baseUrl,activity);
      }

    updateActivity(activity:UserActivity):Observable<UserActivity>{
        return this.http.put<UserActivity>(this.baseUrl+'/'+activity.id,activity);
      }
    
    getAllActivities():Observable<UserActivity[]>{ 
        return this.http.get<UserActivity[]>(this.baseUrl);
    }

    getAllUserActivities():Observable<UserActivity[]>{ 
      return this.http.get<UserActivity[]>(this.baseUrl+'/GetAllActivityDetails');
  }
}
