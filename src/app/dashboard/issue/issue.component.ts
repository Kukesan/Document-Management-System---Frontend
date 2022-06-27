import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/_interfaces/issue.model';
import { IssueService } from 'src/app/shared/services/issue.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  constructor(private issueService : IssueService,public datepipe: DatePipe) {
  //  let currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
  
  //   console.log(currentDateTime);
   }

  form: any = {};
  issues : Issue[] = [];
  issue : Issue={
    issueId : 0,
    description : '',
    createdDate : new Date(),
    userEmail:'',
    isSolved:false
  }

  

  ngOnInit(): void {
    this.getAllIssues();
  }

  submitMsg: boolean = false;
  updateMsg:boolean=false;
  addIssue(){
    // let createdDate =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
    // console.log(createdDate);
    if(this.issue.issueId===0){
      this.issueService.addIssue(this.issue)
      .subscribe(
        (response: any)=>{
          this.getAllIssues();
          this.issue.description='';
          this.submitMsg= true;
        }
      )
    }else{
      this.updateIssue(this.issue);
      this.updateMsg=true;
    }
  }
  getAllIssues(){
    this.issueService.getAllIssues()
    .subscribe(
      response =>{
        this.issues=response;
      }
    )
  }

  deleteIssue(id:string){
    this.issueService.deleteIssue(id)
    .subscribe(
      response=>{
        this.getAllIssues();
      }
    ) 
  }

  pop(issue: Issue){
    this.issue=issue;
  }

  
  updateIssue(issue : Issue){
    this.issueService.updateIssue(issue)
    .subscribe(
      response =>{
        this.getAllIssues();
      }
    )
  }
}
