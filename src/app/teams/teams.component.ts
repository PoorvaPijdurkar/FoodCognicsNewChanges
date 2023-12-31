import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
  showDetails: boolean = false;
  
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
