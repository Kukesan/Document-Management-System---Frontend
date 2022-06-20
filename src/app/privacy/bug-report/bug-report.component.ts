import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/authentication/issue.model';
import { IssueService } from 'src/app/shared/services/issue.service';

@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.css']
})
export class BugReportComponent implements OnInit {

  constructor(private issueService : IssueService) { }

  //form: any = {};
  issues : Issue[] = [];
  // issue : Issue={
  //   IssueId : 0,
  //   UserId : 0,
  //   Description : '',
  //   CreatedDate : ''
  // }

  ngOnInit(): void {
    // this.getAllIssues();
    this.getAdminIssue();
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

  private getAdminIssue = () =>{
    this.issueService.getAdminIssue()
    .subscribe(response => {
      this.issues = response;
    })
  }
}
