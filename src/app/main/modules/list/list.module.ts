import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { CoreModule } from 'twohours-core';
import { UiModule } from 'twohours-ui';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    CoreModule,
    UiModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListComponent,
        pathMatch: 'full',
      },
    ]),
  ],
})
export class ListModule {}
