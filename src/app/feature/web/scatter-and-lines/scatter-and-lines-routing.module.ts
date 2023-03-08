import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScatterComponent } from './scatter/scatter.component';

const routes: Routes = [{
  path: '',
  component: ScatterComponent
},
{
  path: 'Scatter',
  component: ScatterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScatterAndLinesRoutingModule { }
