import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
