import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private router: Router) {}

  name = '';
  email = '';
  password = '';

  onSignup() {
    // Mock signup - you would typically integrate with a backend service
    alert('Account created successfully! Please login.');
    this.router.navigate(['/login']);
  }
}
