import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;
  isServicesDropdownOpen = false;
  isDropdownOpen = false;
  constructor(public router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; 
  }

  closeMenu() {
   this.isMenuOpen = false;
    this.isServicesDropdownOpen = false;
  }
  toggleServicesDropdown() {
    this.isServicesDropdownOpen = !this.isServicesDropdownOpen;
  }
toggleDropdown() {
  this.isDropdownOpen = !this.isDropdownOpen;
}
scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  
}
