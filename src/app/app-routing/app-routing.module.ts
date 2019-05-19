import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
  {
    path: '/home',
    component: HomeComponent,
  },
  {
    path: '/feature',
    loadChildren: './feature/feature.module#FeatureModule',
  },
  {
    path: '',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
