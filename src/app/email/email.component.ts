import { Component, OnInit } from '@angular/core';
import { EmailService } from '../shared/services/email.service';
import { EmailDto } from '../_interfaces/email.model';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private emailService:EmailService) { }

  form: any = {};
  emaildtos : EmailDto[] = [];
  emaildto : EmailDto={
    to:'',
    subject:'',
    body:''
  }

  ngOnInit(): void {
  }

  addEmail(){
    // let createdDate =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
    // console.log(createdDate);
      this.emailService.addEmail(this.emaildto)
      .subscribe(
        (response: any)=>{
          // this.getAllIssues();
          // this.issue.description='';
          // this.submitMsg= true;
        }
      )
    }
}
