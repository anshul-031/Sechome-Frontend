import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <header class="main-header">
      <div class="container">
        <div class="header-content">
          <a routerLink="/" class="brand">Sechome</a>
          <nav>
            <a routerLink="/login" class="nav-link">Login</a>
            <a routerLink="/signup" class="nav-link">Sign Up</a>
          </nav>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .main-header {
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 64px;
    }

    .brand {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-color);
      text-decoration: none;
    }

    nav {
      display: flex;
      gap: 1.5rem;
    }

    .nav-link {
      color: var(--dark-color);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-link:hover {
      color: var(--primary-color);
    }

    @media (max-width: 768px) {
      .header-content {
        padding: 0 1rem;
      }
    }
  `]
})
export class HeaderComponent {}