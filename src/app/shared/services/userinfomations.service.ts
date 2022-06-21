import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInformations } from 'src/app/_interfaces/userdetails.model';

@Injectable({
  providedIn: 'root'
})
export class UserinfomationsService {

  constructor(private http:HttpClient) { }

  baseUrl="https://localhost:5001/api/UserInformations"

  addUser(userinformations:UserInformations):Observable<UserInformations>{
    parseInt(userinformations.id);
    return this.http.post<UserInformations>(this.baseUrl,userinformations);
  }
}
