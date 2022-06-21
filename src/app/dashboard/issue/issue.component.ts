import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/_interfaces/issue.model';
import { IssueService } from 'src/app/shared/services/issue.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  constructor(private issueService : IssueService) { }

  form: any = {};
  issues : Issue[] = [];
  issue : Issue={
    issueId : 0,
    description : '',
    createdDate : '',
    userEmail:''
  }

  ngOnInit(): void {
    this.getAllIssues();
  }
  
  getAllIssues(){
    this.issueService.getAllIssues()
    .subscribe(
      response =>{
        this.issues=response;
        console.log(this.issues)
      }
    )
  }
  addIssue(){
    console.log(this.issue)
    this.issueService.addIssue(this.issue)
    .subscribe(
      (response: any)=>{
        console.log(response);
        this.getAllIssues();
      }
    )
  }

}
