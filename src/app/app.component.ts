import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppointmentdetailsComponent } from './appointmentdetails/appointmentdetails.component';
import { CardComponent } from './card/card.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { OtherdetailsComponent } from './otherdetails/otherdetails.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,
    HeaderComponent,AppointmentdetailsComponent,CardComponent,PrescriptionComponent,OtherdetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard';
}
