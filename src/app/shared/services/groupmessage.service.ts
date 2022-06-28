import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupMessage } from 'src/app/_interfaces/groupmessage.model';

@Injectable({
  providedIn: 'root'
})
export class GroupmessageService {

  constructor(private http:HttpClient) { }

  baseUrl = "https://localhost:5001/api/GroupMessages"

  getAllGroupMessages():Observable<GroupMessage[]>{ 
    return this.http.get<GroupMessage[]>(this.baseUrl);
  }
  addGroupMessage(groupmessage:GroupMessage):Observable<GroupMessage>{
    parseInt(groupmessage.id);
    return this.http.post<GroupMessage>(this.baseUrl,groupmessage);
  }
  // getAdminIssue():Observable<GroupMessage[]>{
  //   return this.http.get<GroupMessage[]>(this.baseUrl+'/'+'AdminGetIssuesDetails');
  // } 

  // deleteIssue(id:string):Observable<GroupMessage>{
  //   return this.http.delete<GroupMessage>(this.baseUrl+'/'+id);
  // }

  // updateIssue(groupmessage:GroupMessage):Observable<GroupMessage>{
  //   return this.http.put<GroupMessage>(this.baseUrl+'/'+groupmessage.id,issue);
  // }


}
