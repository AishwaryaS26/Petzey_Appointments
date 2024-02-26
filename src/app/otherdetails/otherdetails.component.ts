import { Component } from '@angular/core';
import { PrescriptionComponent } from '../prescription/prescription.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otherdetails',
  standalone: true,
  imports: [PrescriptionComponent,RouterOutlet,CommonModule,FormsModule],
  templateUrl: './otherdetails.component.html',
  styleUrl: './otherdetails.component.css'
})
export class OtherdetailsComponent {
  vitals = {
    heartRate: 79,
    temperature: 37,
    respiratoryRate: 14
  };

  symptoms = ['ECG', 'Exercise Stress Test'];

  tests = ['ECG', 'Exercise Stress Test'];

  recommendedDoctors = [
    { name: 'Dr. John Laney', id: 1  },
    { name: 'Dr. Lizy McGuire', id: 2,  }
  ];

} 
