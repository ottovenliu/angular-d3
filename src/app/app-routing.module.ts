import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayOutComponent } from './shared/layout/templates/main-lay-out/main-lay-out.component';

const routes: Routes = [
  // {
  //   path: '',
  //   children: []
  // },
  //   {
  //     path: 'Bulletin',
  //     loadChildren: () =>
  // import('./features/bulletin/bulletin.module').then(
  //   (m) => m.BulletinModule
  // ),
  //   data: {
  //   pageTitle: 'Bulletin',
  // 				},
  //   },
  {
    path: '',
    redirectTo: 'AngularAndD3/Home',
    pathMatch: 'full',
  },
  {
    path: 'AngularAndD3',
    component: MainLayOutComponent,
    loadChildren: () =>
      import('./feature/web/web.module').then(
        (m) => m.WebModule
      ),
    data: {
      pageTitle: 'AngularAndD3',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
