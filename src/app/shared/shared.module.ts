import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { SearchbarComponent } from './search-bar/search-bar.component';
import { FabComponent } from './fab/fab.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatepickerService } from './datepicker/datepicker.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    SearchbarComponent,
    FabComponent,
    DatepickerComponent
  ],
  exports: [
    CardComponent,
    SearchbarComponent,
    FabComponent,
    DatepickerComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        DatepickerService
      ]
    };
  }
}