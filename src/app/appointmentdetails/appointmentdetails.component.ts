import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointmentdetails',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './appointmentdetails.component.html',
  styleUrl: './appointmentdetails.component.css'
})
export class AppointmentdetailsComponent {
  ngOnInit(): void {
  }

 appointment = {
   ID : 76352,
   "AppointmentDate" : "25th Oct 2024",
   "AppointmentTime" : "10:23 AM",
   "PetIssues" : ["Hand Injury, IBS"],
   "ReasonsToVisit" : "High Fever",
   "DoctorName" : "John Doe"
 }  

  onCall() {
    console.log('Call button clicked');
  }

  onChat() {
    console.log('Chat button clicked');
  }

  onClose() {
    console.log('Close button clicked');
  }

  onCancel() {
    console.log('Cancel button clicked');
  }

}
