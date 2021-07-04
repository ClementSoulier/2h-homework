import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'twohours-core';
import { UiModule } from 'twohours-ui';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import * as Components from './components';

@NgModule({
  declarations: [MainComponent, Components.HeaderComponent],
  imports: [
    CommonModule,
    CoreModule,
    UiModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', loadChildren: () => import('./modules/list/list.module').then((m) => m.ListModule) },
          {
            path: 'details',
            loadChildren: () => import('./modules/details/details.module').then((m) => m.DetailsModule),
          },
        ],
      },
    ]),
  ],
})
export class MainModule {}
