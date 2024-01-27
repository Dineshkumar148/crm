import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,RouterOutlet,RouterModule],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.css'
})
export class ContentProjectionComponent {

}
