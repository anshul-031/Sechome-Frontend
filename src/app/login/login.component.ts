import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  token: string | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    // Mock login - you would typically integrate with a backend service
    if (this.username === 'demo' && this.password === 'password') {
      alert('Login successful!');
      // Generate a mock JWT token (replace with actual token generation)
      const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      this.authService.storeToken(mockToken, 1800);
      this.token = mockToken;
      this.router.navigate(['/verification']); // Redirect to verification page
    } else {
      alert('Invalid credentials. Try demo/password');
    }
  }
}
