import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SankeyComponent } from './sankey/sankey.component';
import { ForceDirectedComponent } from './force-directed/force-directed.component';

const routes: Routes = [
  {
    path: '',
    component: SankeyComponent,
  },
  {
    path: 'Sankey',
    component: SankeyComponent,
  },
  {
    path: 'ForceDirected',
    component: ForceDirectedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetsRoutingModule {}
