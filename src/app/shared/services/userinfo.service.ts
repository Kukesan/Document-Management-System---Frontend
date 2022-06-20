import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserForRegistrationDto } from 'src/app/_interfaces/user/userForRegistrationDto.model';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  constructor(private http:HttpClient) { }

  baseUrl = "https://localhost:5001/api/UserInformations"

  getUser():Observable<UserForRegistrationDto[]>{
    return this.http.get<UserForRegistrationDto[]>(this.baseUrl);
  }
}
