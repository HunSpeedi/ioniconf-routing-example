import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { DetailsResolverService } from '../../resolver/details-resolver.service';
import { DummyGuardService } from '../../guards/dummy-guard.service';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'list',
        loadChildren: () => import('../list/list.module').then(m => m.ListPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'list/details',
        loadChildren: () => import('../details/details.module').then(m => m.DetailsPageModule),
        canActivate: [DummyGuardService]
      },
      {
        path: 'list/details-two',
        loadChildren: () => import('../details-two/details-two.module').then(m => m.DetailsTwoPageModule)
      },
      {
        path: 'list/details/:id',
        loadChildren: () => import('../details/details.module').then(m => m.DetailsPageModule),
        resolve: {
          pokemon: DetailsResolverService
        },
        canActivate: [DummyGuardService]
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
