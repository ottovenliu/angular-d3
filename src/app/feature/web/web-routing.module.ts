import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
  },
  {
    path: 'Home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'BarCharts',
    loadChildren: () => import('./bar-charts/bar-charts.module').then(m => m.BarChartsModule)
  },
  {
    path: 'PieCharts',
    loadChildren: () => import('./pie-charts/pie-charts.module').then(m => m.PieChartsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebRoutingModule { }
