import { Component } from '@angular/core';
import { FileInputComponent } from '../../components/file-input/file-input.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FileInputComponent, ButtonComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  images: File[] = [];
}
