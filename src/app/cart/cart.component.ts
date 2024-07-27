import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  leaveTypes: string[] = ['Annual Leave', 'Sick Leave', 'Maternity Leave', 'Paternity Leave', 'Unpaid Leave'];
  leaves = [
    {
      employeeName: 'Deepika',
      leaveType: 'Annual Leave',
      startDate: new Date(2023, 5, 14),
      endDate: new Date(2023, 5, 20),
      status: 'Approved'
    },
    {
      employeeName: 'Dharsini',
      leaveType: 'Sick Leave',
      startDate: new Date(2023, 5, 16),
      endDate: new Date(2023, 5, 18),
      status: 'Pending'
    },
    {
      employeeName: 'Dharani',
      leaveType: 'Maternity Leave',
      startDate: new Date(2023, 6, 1),
      endDate: new Date(2023, 6, 30),
      status: 'Approved'
    }
  ];

  newLeave = {
    employeeName: '',
    leaveType: this.leaveTypes[0],
    startDate: '',
    endDate: '',
    status: 'Pending'
  };

  constructor() { }

  ngOnInit(): void {
  }

  addLeave(): void {
    const newLeaveCopy = { ...this.newLeave, startDate: new Date(this.newLeave.startDate), endDate: new Date(this.newLeave.endDate) };
    this.leaves.push(newLeaveCopy);
    this.resetForm();
  }

  resetForm(): void {
    this.newLeave = {
      employeeName: '',
      leaveType: this.leaveTypes[0],
      startDate: '',
      endDate: '',
      status: 'Pending'
    };
  }
}
