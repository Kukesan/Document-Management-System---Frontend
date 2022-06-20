import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from 'src/app/authentication/issue.model';

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
}
