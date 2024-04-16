import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { DashboardDesignerComponent } from '../Components/dashboard-designer/dashboard-designer.component';

@Component({
  selector: 'app-layout2',
  standalone: true,
  imports: [SidebarComponent,NavigationBarComponent ,DashboardDesignerComponent],
  templateUrl: './layout2.component.html',
  styleUrl: './layout2.component.scss'
})
export class Layout2Component {

}
