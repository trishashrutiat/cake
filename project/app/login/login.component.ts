import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  imageUrl: string = ''; // Declare the imageUrl property here
  email: string = ''; 

  constructor(private router: Router) {}

  login(): void {
    // Store the email in localStorage
    localStorage.setItem('email', this.email);
    
    // Navigate to the welcome page
    this.router.navigate(['/welcome'],{ queryParams: { email: this.email }} );
  }
  
}
