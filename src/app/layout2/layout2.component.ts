import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-layout2',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './layout2.component.html',
  styleUrl: './layout2.component.scss'
})
export class Layout2Component {

}
