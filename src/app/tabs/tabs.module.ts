import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './tabs/tabs.component';
import { TabsService } from './tabs/tabs.service';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    TabsComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TabsService
  ],
  exports: [
    TabComponent,
    TabsComponent
  ]
})
export class TabsModule { }
