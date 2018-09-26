import { Component, Input, OnInit } from '@angular/core';

import { TabsComponent } from './../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  template: `
    <div [hidden]="!active" class="">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: []
})
export class TabComponent implements OnInit {
  @Input() tabTitle: string;
  @Input() tabIcon: string;
  public active = false;

  constructor(private tabs: TabsComponent) { }

  ngOnInit() {
    this.tabs.addTab(this);
  }
}
