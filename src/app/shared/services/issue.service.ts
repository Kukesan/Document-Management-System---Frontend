import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from 'src/app/_interfaces/issue.model';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private http:HttpClient) { }

  baseUrl = "https://localhost:5001/api/Issues"

  getAllIssues():Observable<Issue[]>{ 
    return this.http.get<Issue[]>(this.baseUrl);
  }
  addIssue(issue:Issue):Observable<Issue>{
    parseInt(issue.issueId);
    return this.http.post<Issue>(this.baseUrl,issue);
  }
  getAdminIssue():Observable<Issue[]>{
    return this.http.get<Issue[]>(this.baseUrl+'/'+'AdminGetIssuesDetails');
  } 

  deleteIssue(id:string):Observable<Issue>{
    return this.http.delete<Issue>(this.baseUrl+'/'+id);
  }

  updateIssue(issue:Issue):Observable<Issue>{
    return this.http.put<Issue>(this.baseUrl+'/'+issue.issueId,issue);
  }
  // solve(issue:Issue):Observable<Issue>{
  //   return this.http.put<Issue>(this.baseUrl+'/'+issue.issueId,issue);
  // }
}
