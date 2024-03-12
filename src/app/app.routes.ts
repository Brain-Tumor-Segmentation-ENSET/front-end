import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { ExploreComponent } from './layout/explore/explore.component';
import { AboutComponent } from './layout/about/about.component';
import { TumorComponent } from './layout/tumor/tumor.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/explore",
    pathMatch: "full",
  },
  {
    path: "main",
    component: MainComponent,
  },
  {
    path : "explore",
    component: ExploreComponent
  },
  {
    path : "about",
    component: AboutComponent
  },
  {
    path: ":tumor/infos",
    component: TumorComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
