import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  links = [
    { label: "Explore", path: "/explore" },
    { label: "About", path: "/about" },
    { label: "Scan", path: "/main" }
  ];
}
