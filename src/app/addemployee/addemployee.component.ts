import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  msg = "";
  frm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.maxLength(4), Validators.required]),
    emailid: new FormControl('', [Validators.email, Validators.required]),
    gender: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    isverified: new FormControl('', Validators.required),
    employeeId: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.frm.valid) {
      this.http.post('http://localhost:5000/api/employees', this.frm.value)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.msg = "Form submitted successfully";
          },
          error: (error) => {
            console.error(error);
            this.msg = "There was an error submitting the form";
          }
        });
    } else {
      this.msg = "Please fill out the form correctly.";
    }
  }

  countryList = [
    { id: 1, name: 'USA' },
    { id: 2, name: 'Canada' },
    { id: 3, name: 'UK' }
  ];
}
