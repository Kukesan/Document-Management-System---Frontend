import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  readonly userAPIUrl = "https://localhost:5001/api/UserInformations";

  constructor(private http:HttpClient) { }

  getAllUserList():Observable<any[]> {
    return this.http.get<any>(this.userAPIUrl+'/GetUserInfo' );
  }

  getUserList():Observable<any[]> {
    return this.http.get<any>(this.userAPIUrl );
  }

  addUser(data:any) {
    return this.http.post(this.userAPIUrl , data);
  }
 
  updateUser(id:number|string, data:any) {
    console.log("test123",data);
    console.log("test1",id);
    return this.http.put(this.userAPIUrl + `/${id}`, data);
  }

  deleteUser(id:number|string) {
    return this.http.delete(this.userAPIUrl + `/${id}`);
  }
}
