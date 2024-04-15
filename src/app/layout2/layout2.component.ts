import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-layout2',
  standalone: true,
  imports: [SidebarComponent,NavigationBarComponent],
  templateUrl: './layout2.component.html',
  styleUrl: './layout2.component.scss'
})
export class Layout2Component {

}
