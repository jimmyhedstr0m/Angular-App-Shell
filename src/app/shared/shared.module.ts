import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { SearchbarComponent } from './search-bar/search-bar.component';
import { FabComponent } from './fab/fab.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatepickerService } from './datepicker/datepicker.service';
import { ModalContainerComponent } from './modal/modal-container.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    SearchbarComponent,
    FabComponent,
    DatepickerComponent,
    ModalContainerComponent,
    ModalComponent
  ],
  exports: [
    CardComponent,
    SearchbarComponent,
    FabComponent,
    DatepickerComponent,
    ModalContainerComponent,
    ModalComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        DatepickerService,
        ModalService
      ]
    };
  }
}