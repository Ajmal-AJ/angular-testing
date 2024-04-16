import { Component } from '@angular/core';
import { TopmenuComponent } from '../topmenu/topmenu.component';

@Component({
  selector: 'app-navabar',
  standalone: true,
  imports: [TopmenuComponent],
  templateUrl: './navabar.component.html',
  styleUrl: './navabar.component.scss'
})
export class NavabarComponent {

}
