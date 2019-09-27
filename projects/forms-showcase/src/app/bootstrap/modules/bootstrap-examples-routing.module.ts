import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapExamplesComponent } from '../components/bootstrap-examples.component';

const routes: Routes = [
  {
    path: 'bootstrap',
    component: BootstrapExamplesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrapExamplesRoutingModule {}
