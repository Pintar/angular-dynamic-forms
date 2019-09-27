import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const APP_ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'bootstrap',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: './bootstrap/modules/bootstrap-examples.module#BootstrapExamplesModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
