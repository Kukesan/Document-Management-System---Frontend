import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInformations } from 'src/app/_interfaces/userdetails.model';

@Injectable({
  providedIn: 'root'
})
export class UserinfomationsService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://localhost:5001/api/UserInformations"

  addUser(userinformations: UserInformations): Observable<UserInformations> {
    parseInt(userinformations.empId);
    return this.http.post<UserInformations>(this.baseUrl, userinformations);
  }

  getUser(): Observable<UserInformations[]> {
    return this.http.get<UserInformations[]>(this.baseUrl);
  }

  // approveUser(boolean:userAccpted):Observable<UserInformations>{
  //   //parseInt(userinformations.empId);
  //   return this.http.post<UserInformations>(this.baseUrl,userinformations.userAccepted);
  // }
  approveUser(userinformations: UserInformations): Observable<UserInformations> {
    return this.http.put<UserInformations>(this.baseUrl + '/' + userinformations.id, userinformations);
  }

  getAllUsers(): Observable<UserInformations[]> {
    return this.http.get<UserInformations[]>(this.baseUrl + '/' + 'GetUserInfo');
  }

  getAllUsersforGroup(): Observable<UserInformations[]> {
    return this.http.get<UserInformations[]>(this.baseUrl + '/' + 'GetUserInformations');
  }

  updateUser(userinformations: UserInformations): Observable<UserInformations> {
    return this.http.put<UserInformations>(this.baseUrl + '/' + userinformations.id, userinformations);
  }

  change(id: string) {
    console.log("service");
    console.log(id);

    return this.http.put(`${this.baseUrl}/change/${id}`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    })
  }
} 
