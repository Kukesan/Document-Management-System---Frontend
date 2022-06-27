import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from 'src/app/_interfaces/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  baseUrl = "https://localhost:5001/api/Groups" 
  constructor(private http:HttpClient) { }
 
  getAllGroups():Observable<Group[]>{
    return this.http.get<Group[]>(this.baseUrl);
  } 
  addGroup(group:Group):Observable<Group>{
    parseInt(group.name);
    return this.http.post<Group>(this.baseUrl,group);
  } 

  deleteGroup(groupId:number):Observable<Group>{
    return this.http.delete<Group>(this.baseUrl+'/'+groupId);
  }

  updateGroup(group:Group):Observable<Group>{
    return this.http.put<Group>(this.baseUrl+'/'+group.groupId,group);
  }
}
