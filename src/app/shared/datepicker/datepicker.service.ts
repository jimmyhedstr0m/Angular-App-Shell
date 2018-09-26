import { Injectable } from '@angular/core';

import { Month } from './month';
import { Day } from './day';

export interface Calendar {
  month: Month;
  year: number;
  date: Date;
  weeks: CalendarWeek[];
}

export interface CalendarDay {
  overflow: boolean;
  date: Date;
}

export interface CalendarWeek {
  days: CalendarDay[];
  weekNumber: number;
}

@Injectable()
export class DatepickerService {
  constructor() { }

  getDaysInMonth(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  getPreviousMonthDate(date: Date): Date {
    let previousYear: number = date.getFullYear();
    let previousMonth: number = date.getMonth() - 1;

    if (previousMonth < Month.January) {
      previousMonth = Month.December;
      previousYear--;
    }

    return new Date(previousYear, previousMonth);
  }

  getNextMonthDate(date: Date): Date {
    let nextYear: number = date.getFullYear();
    let nextMonth: number = date.getMonth() + 1;

    if (nextMonth > Month.December) {
      nextMonth = Month.January;
      nextYear++;
    }

    return new Date(nextYear, nextMonth);
  }

  getFirstDayInMonth(date: Date): Day {
    const currentDate: Date = new Date(date.getFullYear(), date.getMonth(), 1);
    return (currentDate.getDay() + 6) % 7;
  }

  getWeekNumber(date: Date): number {
    const currentDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    currentDate.setUTCDate(currentDate.getUTCDate() + 4 - (currentDate.getUTCDay() || 7));

    const yearStart = new Date(Date.UTC(currentDate.getUTCFullYear(), 0, 1));
    const weekNumber = Math.ceil((((currentDate.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
    return weekNumber;
  }

  getCalendar(date: Date): any {
    const currentDate: Date = new Date(date.getFullYear(), date.getMonth());
    const previousMonthDate: Date = this.getPreviousMonthDate(currentDate);
    const nextMonthDate: Date = this.getNextMonthDate(currentDate);
    const daysInCurrentMonth: number = this.getDaysInMonth(currentDate);
    const daysInPreviousMonth: number = this.getDaysInMonth(previousMonthDate);
    const firstDay: Day = this.getFirstDayInMonth(currentDate);
    const weeks: CalendarWeek[] = [];

    let calendar: Calendar;
    let previousMonthDayCounter: number = daysInPreviousMonth - firstDay + 1;
    let monthDayCounter: number = 1;
    let nextMonthDayCounter: number = 1;
    let weekNumberCounter: number = this.getWeekNumber(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1));

    for (let row = 0; row < 6; row++) {
      const days: CalendarDay[] = [];
      let currentWeekNumber: number;

      for (let day = Day.Monday; day <= Day.Sunday; day++) {
        let monthDate: Date = currentDate;
        let dayNumber: number;
        let overflow = true;

        if (previousMonthDayCounter <= daysInPreviousMonth) {
          monthDate = previousMonthDate;
          dayNumber = previousMonthDayCounter++;
        } else if (monthDayCounter <= daysInCurrentMonth) {
          overflow = false;
          dayNumber = monthDayCounter++;
        } else {
          monthDate = nextMonthDate;
          dayNumber = nextMonthDayCounter++;
        }

        const date: Date = new Date(monthDate.getFullYear(), monthDate.getMonth(), dayNumber);

        if (day === Day.Monday) {
          currentWeekNumber = this.getWeekNumber(date);
        }

        days.push({
          overflow: overflow,
          date: date
        });
      }

      weeks.push({
        days: days,
        weekNumber: currentWeekNumber
      });
    }

    calendar = {
      month: currentDate.getMonth(),
      year: currentDate.getFullYear(),
      date: currentDate,
      weeks: weeks
    };

    return calendar;
  }
}
