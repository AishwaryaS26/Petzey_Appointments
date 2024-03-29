import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppointmentdetailsComponent } from '../appointmentdetails/appointmentdetails.component';
import { CardComponent } from '../card/card.component';
import { PrescriptionComponent } from '../prescription/prescription.component';
import { OtherdetailsComponent } from '../otherdetails/otherdetails.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink , RouterOutlet,AppointmentdetailsComponent,CardComponent,PrescriptionComponent,OtherdetailsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  // background: #18385C;

  
  dashboardactiveColor: string = '#18385C'; 
  dashboardbg:string='#ffffff';
  petsactiveColor: string = '#ffffff';
  petsbg:string='' ;
  profileactiveColor: string = '#ffffff'; 
  profilebg:string='';

  handleMenuItemClick(menuItem: string): void {
    this.resetMenuItems();

    switch (menuItem) {
      case 'dashboard':
        this.dashboardactiveColor = '#18385C';
        this.dashboardbg='#ffffff'
        break;
      case 'pets':
        this.petsactiveColor = '#18385C';
        this.petsbg='#ffffff'
        break;
      case 'profile':
        this.profileactiveColor = '#18385C';
        this.profilebg='#ffffff'
        break;
    }
  }

  resetMenuItems(): void {
    this.dashboardactiveColor = '#ffffff';
    this.dashboardbg='';
    this.petsactiveColor = '#ffffff';
    this.petsbg='';
    this.profileactiveColor = '#ffffff'; 
    this.profilebg='';
  }
}
