import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';

export const routes: Routes = [
  {
    path: "",
    component: MainComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
