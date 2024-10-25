import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
    const token = this.authService.getToken();
    if (token && !this.authService.isTokenExpired()) {
      this.isLoggedIn = true;
    }
  }
}
