import { Component, Injectable, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/shared/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent {
  title = 'InstantVerify';

}

