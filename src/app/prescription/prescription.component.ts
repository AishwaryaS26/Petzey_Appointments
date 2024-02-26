import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prescription',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './prescription.component.html',
  styleUrl: './prescription.component.css'
})
export class PrescriptionComponent {
  prescriptions = [
    {
      title: '1. Crocine',
      symptoms: ['Days: 10', 'Don\'t use hot water to consume tablets'],
      consumption:'Before Food'
      // img: 'assets/bar1.svg'
    },
    {
      title: '2. Crocine',
      symptoms: ['Days: 10', 'Don\'t use hot water to consume tablets'],
      consumption:'After Food'
      // img: 'assets/bar.svg'
      
    },
    {
      title: '3. Crocine',
      symptoms: ['Days: 10', 'Don\'t use hot water to consume tablets'],
      consumption:'Before Food'
      // img: 'assets/bar.svg'
    }
  ];

}
