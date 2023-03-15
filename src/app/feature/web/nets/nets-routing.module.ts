import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SankeyComponent } from './bar/sankey.component';

const routes: Routes = [{
  path: '',
  component: SankeyComponent
},
{
  path: 'Sankey',
  component: SankeyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SankeyRoutingModule { }
