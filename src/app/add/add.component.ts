import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public imgSrc: Blob;

  constructor() { }

  ngOnInit() { }

  private getPastedData(clipboardEvent: ClipboardEvent): Observable<Blob> {
    const subject = new Subject<Blob>();
    const fileReader = new FileReader();
    const items: DataTransferItemList = clipboardEvent.clipboardData.items;
    const itemLength = items.length;
    let imgFile;

    for (let i = 0; i < itemLength; i++) {
      const item: DataTransferItem = items[i];
      if (item.kind === 'file') {
        imgFile = item.getAsFile();
        break;
      }
    }

    if (imgFile) {
      fileReader.onload = () => {
        subject.next(fileReader.result);
        // return Observable.of(subject);
      }

      fileReader.readAsDataURL(imgFile);
    } else {
      subject.error('Missing image file');
      // return Observable.of(subject);
    }

    return subject;
  }

  paste(event: ClipboardEvent) {
    console.log('paaaste', event);

    this.getPastedData(event)
      .subscribe((image: Blob) => {
        this.imgSrc = image;
        console.log('done');
      }, (err) => {
        console.log(err);
      });

    event.preventDefault();
  }

  click(event: Event) {
    // const e = document.createEvent('HTMLEvents');
    // e.initEvent('paste', true, true);
    // event.srcElement.dispatchEvent(e);

    const clipboard = new ClipboardEvent('paste');
    console.log(clipboard.clipboardData);


  }
}
