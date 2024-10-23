import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}
  onLogin() {
    // Mock login - you would typically integrate with a backend service
    if (this.username === 'demo' && this.password === 'password') {
      alert('Login successful!');
      this.router.navigate(['/verification']); // Redirect to verification page
    } else {
      alert('Invalid credentials. Try demo/password');
    }
  }
}
