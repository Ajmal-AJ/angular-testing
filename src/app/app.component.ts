import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login2Component } from './login2/login2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Login2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testingapp';
}
