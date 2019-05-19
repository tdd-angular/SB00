import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DemoFormComponent } from './demo-form/demo-form.component';

export const routes: Routes = [
  {
    path: '/demo',
    component: DemoFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class FeatureRoutingModule { }
