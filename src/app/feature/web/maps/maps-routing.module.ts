import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BubbleMapComponent } from './bubble-map/bubble-map.component';
import { TreeMapComponent } from './tree-map/tree-map.component';

const routes: Routes = [
  {
    path: '',
    component: BubbleMapComponent,
  },
  {
    path: 'BubbleMap',
    component: BubbleMapComponent,
  },
  {
    path: 'TreeMap',
    component: TreeMapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
