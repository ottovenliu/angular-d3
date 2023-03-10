import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BubbleMapComponent } from './bubble-map/bubble-map.component';

const routes: Routes = [{
  path: '',
  component: BubbleMapComponent
},
{
  path: 'BubbleMap',
  component: BubbleMapComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
