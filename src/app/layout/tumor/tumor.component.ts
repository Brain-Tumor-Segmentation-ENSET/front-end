import { Component } from '@angular/core';
import { StorageService } from '../../core/service/storage.service';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-tumor',
  standalone: true,
  imports: [NotFoundComponent],
  templateUrl: './tumor.component.html',
  styleUrl: './tumor.component.scss'
})
export class TumorComponent {
  constructor(private storage: StorageService) { }
  tumor: any;

  ngOnInit() {
    this.tumor = this.storage.tumor;
  }
}
