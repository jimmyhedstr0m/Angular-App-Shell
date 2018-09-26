import { Component, Input, OnInit } from '@angular/core';

import { DatepickerService, Calendar } from './datepicker.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  @Input() monthDate?: Date = new Date();
  public calendar: Calendar;
  public today: Date;

  constructor(private datepickerService: DatepickerService) { }

  ngOnInit() {
    const today: Date = new Date();
    this.calendar = this.datepickerService.getCalendar(this.monthDate);
    this.today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    // console.log(this.calendar);
    // console.log(this.today);
  }

  getNext() {
    this.monthDate = this.datepickerService.getNextMonthDate(this.monthDate);
    this.calendar = this.datepickerService.getCalendar(this.monthDate);
  }

  getPrevious() {
    this.monthDate = this.datepickerService.getPreviousMonthDate(this.monthDate);
    this.calendar = this.datepickerService.getCalendar(this.monthDate);
  }
}
