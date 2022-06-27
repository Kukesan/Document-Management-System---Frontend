import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/_interfaces/issue.model';
import { IssueService } from 'src/app/shared/services/issue.service';


@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.css']
})
export class BugReportComponent implements OnInit {

  constructor(private issueService: IssueService) { }

  //form: any = {};
  issues: Issue[] = [];
  issue : Issue={
    issueId : 0,
    description : '',
    createdDate : new Date(),
    userEmail:'',
    isSolved:false
  }

  ngOnInit(): void {
    // this.getAllIssues();
    this.getAdminIssue();
   // this.checkSolve(this.issue);
  }

  getAllIssues() {
    this.issueService.getAllIssues()
      .subscribe(
        response => {
          this.issues = response;
          console.log(this.issues)
        }
      )
  }

  private getAdminIssue = () => {
    this.issueService.getAdminIssue()
      .subscribe(response => {
        this.issues = response;
      })
  }

  solveButton: string ;
  // checkSolve(issue: Issue) {
  //   if (issue.isSolved == true) {
  //     this.solveButton = 'Solved';
  //   } else {
  //     this.solveButton = 'UnSolved';
  //   }
  // }

  currentId: number;
  solve(issue: Issue) {
    this.currentId = issue.issueId;
    if (issue.isSolved == false) {
      issue.isSolved = true;
      this.solveButton = ' Solved';
    } else {
      issue.isSolved = false;
      this.solveButton = ' UnSolved';
    }
    console.log(issue.isSolved);
    this.issueService.updateIssue(issue)
      .subscribe(
        response => {

        }
      )
  }
}
