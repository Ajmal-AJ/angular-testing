import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-designer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard-designer.component.html',
  styleUrl: './dashboard-designer.component.scss'
})
export class DashboardDesignerComponent {
  router = inject(Router);
  create() {
    this.router.navigate(['/dashboard-creation']);
  }
}
