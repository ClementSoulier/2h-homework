import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { CoreModule } from 'twohours-core';
import { UiModule } from 'twohours-ui';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    CoreModule,
    UiModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetailsComponent,
        pathMatch: 'full',
      },
    ]),
  ],
})
export class DetailsModule {}
