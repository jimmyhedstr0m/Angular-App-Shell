import { Component } from '@angular/core';

import { TabComponent } from './../tab/tab.component';
import { TabsService } from './tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  public tabs: TabComponent[] = [];

  constructor(private tabsService: TabsService) { }

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
      this.tabsService.setActiveTab(tab);
    }

    this.tabs.push(tab);
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });

    tab.active = true;
    this.tabsService.setActiveTab(tab);
  }
}
