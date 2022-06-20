import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInformation } from 'src/app/_interfaces/userinfo.model';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  constructor(private http:HttpClient) { }

  baseUrl = "https://localhost:5001/api/UserInformations"

  getUser():Observable<UserInformation[]>{
    return this.http.get<UserInformation[]>(this.baseUrl);
  }
}
