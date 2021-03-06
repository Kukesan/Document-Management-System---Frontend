import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserApiService } from 'src/app/shared/services/user-api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userList$!: Observable<any[]>;

  form: FormGroup = new FormGroup({
    //empId: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    jobPosition: new FormControl(''),
    city: new FormControl(''),
    telephoneNo: new FormControl(''),
    //userEmail: new FormControl(''),
    address: new FormControl('')
  });
  submitted = false;

  constructor(private service: UserApiService, private formBuilder: FormBuilder) {
    console.log("service test", service);
  }

  @Input() user: any;
  id: number = 0;
  empId: string = "";
  firstName: string = "";
  lastName: string = "";
  address: string = "";
  city: string = "";
  jobPosition: string = "";
  telephoneNo: string = "";
  userEmail: string = "";
  userAccepted:boolean=true;

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      // empId: [
      //   '',
      //   [
      //     Validators.required,
      //     //Validators.minLength(5),
      //     //Validators.maxLength(10)
      //   ]
      // ],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      jobPosition: ['', [Validators.required]],
      //email: ['', [Validators.required, Validators.email]],

      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      telephoneNo: ['',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      ]
    }
    );

    console.log("****", this.user);
    this.id = this.user.id;
    this.empId = this.user.empId;
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.address = this.user.address;
    this.city = this.user.city;
    this.jobPosition = this.user.jobPosition;
    this.telephoneNo = this.user.telephoneNo;
    this.userEmail = this.user.userEmail;
    this.userAccepted=true;
    this.userList$ = this.service.getUserList();

  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  updateUser() {
    console.log("test303", user);
    var user = {
      id: this.id,
      empId: this.empId,
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      city: this.city,
      jobPosition: this.jobPosition,
      telephoneNo: this.telephoneNo,
      userEmail: this.userEmail,
      userAccepted:this.userAccepted
    }

    this.submitted = true;
    if (this.form.invalid) {
      console.log("invalid");
      return;
    }

    var id: number = this.id;
    this.service.updateUser(id, user).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        console.log("test4");
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if (showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function () {
        if (showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })

    console.log(JSON.stringify(this.form.value, null, 2));
  }


}
