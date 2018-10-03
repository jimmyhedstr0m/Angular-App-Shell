import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Observable } from 'rxjs/internal/Observable';

import { ModalComponent } from './modal.component';

@Injectable()
export class ModalService {
  private modalsSubject = new ReplaySubject<ModalComponent[]>(1);
  private modalsQueue: ModalComponent[] = [];

  constructor() { }

  open(modal: ModalComponent) {
    this.modalsQueue.push(modal);
    this.modalsSubject.next(this.modalsQueue);
    console.log('open', modal);
  }

  getModals(): Observable<ModalComponent[]> {
    return this.modalsSubject.asObservable();
  }

  close(currentModal: ModalComponent) {
    const index = this.modalsQueue.findIndex((modal: ModalComponent) => modal === currentModal);
    if (index > -1) {
      this.modalsQueue.splice(index, 1);
      this.modalsSubject.next(this.modalsQueue);
    }
  }

  closeAll() {
    this.modalsQueue = [];
    this.modalsSubject.next(this.modalsQueue);
  }

}