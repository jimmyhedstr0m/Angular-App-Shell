import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Observable } from 'rxjs/internal/Observable';

import { TabComponent } from './../tab/tab.component';

@Injectable()
export class TabsService {
  private tabSubject = new ReplaySubject<TabComponent>(1);

  constructor() { }

  setActiveTab(tab: TabComponent) {
    this.tabSubject.next(tab);
  }

  getActiveTab(): Observable<TabComponent> {
    return this.tabSubject.asObservable();
  }

}
